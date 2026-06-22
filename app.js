document.addEventListener("DOMContentLoaded", () => {
  // Constants and State
  let STACK_DATA = [];
  const sidebarNav = document.getElementById("sidebar-nav");
  const contentSection = document.getElementById("content-sections");
  const searchInput = document.getElementById("search-input");
  const toast = document.getElementById("toast");
  
  // Stat containers
  const statTotalTools = document.getElementById("stat-total-tools");
  const statCategories = document.getElementById("stat-categories");
  const statFeatured = document.getElementById("stat-featured");
  const statAlternatives = document.getElementById("stat-alternatives");

  // Load and Parse README.md
  async function loadDataFromReadme() {
    try {
      const response = await fetch("README.md");
      if (!response.ok) {
        throw new Error(`Failed to fetch README.md (Status: ${response.status})`);
      }
      const text = await response.text();
      parseReadme(text);
      
      // Calculate Stats & Initialize Render
      calculateAndDisplayStats();
      renderSidebar();
      renderContent();
    } catch (err) {
      console.error("Error loading README data:", err);
      contentSection.innerHTML = `
        <div class="error-state" style="padding: 3rem; text-align: center; color: #ef4444; font-family: var(--font-mono);">
          [SYSTEM ERROR: FAILED TO PARSE AUTHORITATIVE README.md DATA]<br>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; display: block;">${err.message}</span>
        </div>
      `;
    }
  }

  // Markdown Table Parser
  function parseReadme(markdown) {
    const lines = markdown.split("\n");
    let currentCategory = null;
    STACK_DATA = [];

    const categoryIcons = {
      "agent-frameworks": "[AGENT]",
      "coding-agents": "[CODE]",
      "browser-agents": "[WEB]",
      "memory-systems": "[MEM]",
      "mcp-ecosystem": "[MCP]",
      "voice-agents": "[VOICE]",
      "workflow-automation": "[FLOW]",
      "computer-use": "[OS]",
      "evaluation-observability": "[EVAL]",
      "deployment-infrastructure": "[INFRA]",
      "founder-saas-alternatives": "[SAAS]"
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Detect Category Headings (e.g., "## 01 Agent Frameworks")
      if (trimmedLine.startsWith("## ")) {
        const catText = trimmedLine.substring(3).trim();
        // Remove leading category digits/numbers
        const categoryName = catText.replace(/^\d+\s+/, "").trim();
        const categoryId = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const icon = categoryIcons[categoryId] || "[TOOL]";

        currentCategory = {
          category: categoryName,
          categoryId: categoryId,
          icon: icon,
          description: "",
          items: []
        };
        STACK_DATA.push(currentCategory);
      } 
      // Detect Category Descriptions (non-empty lines immediately below heading, before tables)
      else if (currentCategory && trimmedLine && !trimmedLine.startsWith("|") && !trimmedLine.startsWith("-") && !trimmedLine.startsWith("*")) {
        if (!currentCategory.description) {
          currentCategory.description = trimmedLine;
        }
      } 
      // Detect Markdown Table Rows
      else if (currentCategory && trimmedLine.startsWith("|")) {
        const cols = trimmedLine.split("|").map(c => c.trim());
        
        // Ensure it's a valid data row (minimum columns, not table headers or formatting rows)
        if (cols.length >= 8 && cols[1] !== "#" && !cols[1].startsWith("---")) {
          const repoCell = cols[2];
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
          const match = repoCell.match(linkRegex);

          if (match) {
            const name = match[1];
            const url = match[2];
            const stars = cols[3];
            const lang = cols[4];
            const license = cols[5];
            const selfHost = cols[6];
            const note = cols[7];

            currentCategory.items.push({
              id: currentCategory.items.length + 1,
              name: name,
              url: url,
              stars: stars,
              lang: lang,
              license: license,
              selfHost: selfHost,
              note: note
            });
          }
        }
      }
    });
  }

  // Calculate & Display Stats
  function calculateAndDisplayStats() {
    let totalTools = 0;
    let featured = 0;
    let alternatives = 0;

    STACK_DATA.forEach(cat => {
      totalTools += cat.items.length;
      if (cat.categoryId === "founder-saas-alternatives") {
        alternatives += cat.items.length;
      } else {
        cat.items.forEach(item => {
          if (item.stars && (item.stars.includes("K") || item.stars.includes("Active"))) {
            featured++;
          }
        });
      }
    });

    if (statTotalTools) statTotalTools.textContent = totalTools;
    if (statCategories) statCategories.textContent = STACK_DATA.length;
    if (statFeatured) statFeatured.textContent = featured;
    if (statAlternatives) statAlternatives.textContent = alternatives;
  }

  // Render Sidebar Category Navigation
  function renderSidebar() {
    sidebarNav.innerHTML = "";
    STACK_DATA.forEach((cat, index) => {
      const idxStr = String(index + 1).padStart(2, '0');
      const navItem = document.createElement("a");
      navItem.className = `nav-item ${index === 0 ? 'active' : ''}`;
      navItem.href = `#${cat.categoryId}`;
      navItem.dataset.id = cat.categoryId;
      navItem.innerHTML = `
        <span class="nav-num">${idxStr}</span>
        <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">${cat.icon}</span>
        <span>${cat.category}</span>
      `;

      navItem.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(cat.categoryId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          updateActiveNavItem(cat.categoryId);
        }
      });

      sidebarNav.appendChild(navItem);
    });
  }

  function updateActiveNavItem(id) {
    document.querySelectorAll(".nav-item").forEach(item => {
      if (item.dataset.id === id) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Render Category grids
  function renderContent(filterText = "") {
    contentSection.innerHTML = "";
    const cleanFilter = filterText.toLowerCase().trim();

    STACK_DATA.forEach((cat) => {
      // Filter items matching name, description, tags, language, or license
      const filteredItems = cat.items.filter(item => {
        return item.name.toLowerCase().includes(cleanFilter) || 
               item.note.toLowerCase().includes(cleanFilter) ||
               (item.lang && item.lang.toLowerCase().includes(cleanFilter)) ||
               (item.license && item.license.toLowerCase().includes(cleanFilter)) ||
               (item.stars && item.stars.toLowerCase().includes(cleanFilter));
      });

      if (cleanFilter && filteredItems.length === 0) return;

      const section = document.createElement("section");
      section.className = "section-wrapper";
      section.id = cat.categoryId;

      // Header row
      const sectionHeader = document.createElement("div");
      sectionHeader.className = "category-header";
      sectionHeader.innerHTML = `
        <h2 class="category-title-text">${cat.category}</h2>
        <p class="category-desc">${cat.description}</p>
      `;
      section.appendChild(sectionHeader);

      // Grid container
      const grid = document.createElement("div");
      grid.className = "repo-grid";

      // Render cards
      filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = `repo-card ${cat.categoryId === 'founder-saas-alternatives' ? 'saas-alt' : ''}`;
        
        let starsBadge = "";
        if (item.stars && item.stars !== "N/A") {
          starsBadge = `<span class="stars-badge">${item.stars}</span>`;
        }

        // Build Badge tags
        let badgeTagsHtml = "";
        if (item.lang && item.lang !== "N/A") {
          badgeTagsHtml += `<span class="badge-tag lang">${item.lang}</span>`;
        }
        if (item.license && item.license !== "N/A") {
          badgeTagsHtml += `<span class="badge-tag lic">${item.license}</span>`;
        }
        if (item.selfHost && item.selfHost.toLowerCase() === "yes") {
          badgeTagsHtml += `<span class="badge-tag self">Self-Hosted</span>`;
        }

        card.innerHTML = `
          <div>
            <div class="card-header">
              <h3 class="repo-name">${item.name}</h3>
              ${starsBadge}
            </div>
            <div class="card-badges">
              ${badgeTagsHtml}
            </div>
            <p class="repo-note">${item.note || 'No description available.'}</p>
          </div>
          <div class="card-actions">
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="repo-link">
              <span>View Repository</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <button class="action-btn-icon copy-btn" data-url="${item.url}" title="Copy Repository URL">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      contentSection.appendChild(section);
    });

    // Copy to Clipboard Listeners
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const url = btn.getAttribute("data-url");
        navigator.clipboard.writeText(url).then(() => {
          showToast("Repository link copied to clipboard");
        }).catch(err => {
          console.error("Failed to copy link: ", err);
        });
      });
    });

    if (!cleanFilter) {
      setupScrollSync();
    }
  }

  // Scroll Sync via IntersectionObserver
  let observer = null;
  function setupScrollSync() {
    if (observer) {
      observer.disconnect();
    }

    const sections = document.querySelectorAll(".section-wrapper");
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveNavItem(entry.target.id);
        }
      });
    }, options);

    sections.forEach(sec => observer.observe(sec));
  }

  // Toast Alerts
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  // Search input listeners
  searchInput.addEventListener("input", (e) => {
    renderContent(e.target.value);
  });

  // Hotkey focus for '/'
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Fetch initial data
  loadDataFromReadme();
});
