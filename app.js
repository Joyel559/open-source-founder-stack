document.addEventListener("DOMContentLoaded", () => {
  // Constants and State
  const sidebarNav = document.getElementById("sidebar-nav");
  const contentSection = document.getElementById("content-sections");
  const searchInput = document.getElementById("search-input");
  const toast = document.getElementById("toast");
  
  // Stat containers
  const statTotalTools = document.getElementById("stat-total-tools");
  const statCategories = document.getElementById("stat-categories");
  const statFeatured = document.getElementById("stat-featured");
  const statAlternatives = document.getElementById("stat-alternatives");

  // Suggest Modal Elements
  const suggestBtn = document.getElementById("suggest-btn");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const suggestForm = document.getElementById("suggest-form");
  const copyPayloadBtn = document.getElementById("copy-payload-btn");

  // Initial Calculation of Stats
  let totalToolsCount = 0;
  let featuredCount = 0;
  let alternativesCount = 0;

  STACK_DATA.forEach(cat => {
    totalToolsCount += cat.items.length;
    if (cat.categoryId === "saas-alternatives") {
      alternativesCount += cat.items.length;
    } else {
      cat.items.forEach(item => {
        if (item.stars && item.stars.includes("K")) {
          featuredCount++;
        }
      });
    }
  });

  // Display Stats
  if (statTotalTools) statTotalTools.textContent = totalToolsCount;
  if (statCategories) statCategories.textContent = STACK_DATA.length;
  if (statFeatured) statFeatured.textContent = featuredCount;
  if (statAlternatives) statAlternatives.textContent = alternativesCount;

  // Render Sidebar
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
        <span>${cat.icon}</span>
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

  // Render Stack Items
  function renderContent(filterText = "") {
    contentSection.innerHTML = "";
    const cleanFilter = filterText.toLowerCase().trim();

    STACK_DATA.forEach((cat) => {
      // Filter items
      const filteredItems = cat.items.filter(item => {
        return item.name.toLowerCase().includes(cleanFilter) || 
               (item.note && item.note.toLowerCase().includes(cleanFilter)) ||
               (item.stars && item.stars.toLowerCase().includes(cleanFilter));
      });

      // Skip displaying the category if it has no matches during filter
      if (cleanFilter && filteredItems.length === 0) return;

      const section = document.createElement("section");
      section.className = "section-wrapper";
      section.id = cat.categoryId;

      // Header row
      const sectionHeader = document.createElement("div");
      sectionHeader.className = "category-header";
      sectionHeader.innerHTML = `
        <span class="category-title-icon">${cat.icon}</span>
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
        card.className = `repo-card ${cat.categoryId === 'saas-alternatives' ? 'saas-alt' : ''}`;
        
        let starsBadge = "";
        if (item.stars) {
          starsBadge = `<span class="stars-badge">★ ${item.stars}</span>`;
        }

        card.innerHTML = `
          <div class="card-header">
            <h3 class="repo-name">${item.name}</h3>
            ${starsBadge}
          </div>
          <p class="repo-note">${item.note || 'No description available.'}</p>
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

    // Add Copy Listeners
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const url = btn.getAttribute("data-url");
        navigator.clipboard.writeText(url).then(() => {
          showToast(`Copied repository link!`);
        }).catch(err => {
          console.error("Failed to copy link: ", err);
        });
      });
    });

    // Setup intersection observer to sync scrolling with active category in sidebar (only if not searching)
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

  // Toast System
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // Live Search listener
  searchInput.addEventListener("input", (e) => {
    renderContent(e.target.value);
  });

  // Focus search input using slash shortcut
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // Suggest Modal Handlers
  suggestBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open");
  });

  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("open");
    }
  });

  suggestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("suggest-name").value;
    const category = document.getElementById("suggest-category").value;
    const repo = document.getElementById("suggest-repo").value;
    const note = document.getElementById("suggest-note").value;

    const payload = `### New Tool Suggestion\n- **Name**: ${name}\n- **Category**: ${category}\n- **Repository**: ${repo}\n- **Note**: ${note}`;
    
    navigator.clipboard.writeText(payload).then(() => {
      showToast("Suggestion markdown copied! Paste it in the GitHub Issue.");
      suggestForm.reset();
      modalOverlay.classList.remove("open");
    }).catch(() => {
      alert("Failed to copy suggestion. Here is your text:\n\n" + payload);
    });
  });

  // Initialize Rendering
  renderSidebar();
  renderContent();
});
