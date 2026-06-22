const STACK_DATA = [
  {
    category: "Agent Frameworks",
    categoryId: "agent-frameworks",
    icon: "[AGENT]",
    description: "Orchestrate, build, and deploy multi-agent systems with state-of-the-art frameworks.",
    items: [
      { id: 1, name: "AutoGen", stars: "57K", url: "https://github.com/microsoft/autogen", note: "Multi-agent conversation framework by Microsoft." },
      { id: 2, name: "CrewAI", stars: "50K", url: "https://github.com/crewAIInc/crewAI", note: "Role-play, autonomous agent orchestration framework." },
      { id: 3, name: "LangGraph", stars: "20K", url: "https://github.com/langchain-ai/langgraph", note: "Build stateful, multi-actor applications with LLMs as graphs." },
      { id: 4, name: "Agno", stars: "30K", url: "https://github.com/agno-agi/agno", note: "Lightweight framework for building multi-agent systems with memory." },
      { id: 5, name: "SmolAgents", stars: "18K", url: "https://github.com/huggingface/smolagents", note: "Hugging Face's compact agent library leveraging code-writing agents." },
      { id: 6, name: "PydanticAI", stars: "15K", url: "https://github.com/pydantic/pydantic-ai", note: "Type-safe agent framework built on top of Pydantic." },
      { id: 7, name: "Haystack", stars: "22K", url: "https://github.com/deepset-ai/haystack", note: "End-to-end LLM orchestration framework for search and RAG." },
      { id: 8, name: "Semantic Kernel", stars: "25K", url: "https://github.com/microsoft/semantic-kernel", note: "Integrate cutting-edge LLM technology into standard languages." }
    ]
  },
  {
    category: "Coding Agents",
    categoryId: "coding-agents",
    icon: "[CODE]",
    description: "AI engineers that edit codebases, run commands, and automate software development.",
    items: [
      { id: 9, name: "OpenHands", stars: "70K", url: "https://github.com/All-Hands-AI/OpenHands", note: "Open-source agentic platform for software engineering." },
      { id: 10, name: "Aider", stars: "35K", url: "https://github.com/Aider-AI/aider", note: "AI pair programming in your terminal, directly editing local files." },
      { id: 11, name: "SWE-Agent", stars: "18K", url: "https://github.com/SWE-agent/SWE-agent", note: "Resolves real-world GitHub issues using an Agent-Computer Interface." },
      { id: 12, name: "Continue", stars: "30K", url: "https://github.com/continuedev/continue", note: "The leading open-source AI code assistant for VS Code and JetBrains." },
      { id: 13, name: "Roo Code", stars: "25K", url: "https://github.com/RooVetGit/Roo-Code", note: "AI coding assistant with custom system prompts and file controls." },
      { id: 14, name: "Cline", stars: "61K", url: "https://github.com/cline/cline", note: "Autonomous developer agent that can create, edit, test, and run code." },
      { id: 15, name: "GPT Engineer", stars: "55K", url: "https://github.com/AntonOsika/gpt-engineer", note: "Specify what you want to build, the AI asks clarifying questions and generates it." },
      { id: 16, name: "OpenCode", stars: null, url: "https://github.com/sst/opencode", note: "A toolkit for building web interfaces with agent-assisted coding." }
    ]
  },
  {
    category: "Browser Agents",
    categoryId: "browser-agents",
    icon: "[WEB]",
    description: "Visual web scrapers, automated QA tools, and browser automation powered by LLMs.",
    items: [
      { id: 17, name: "Browser Use", stars: "Active", url: "https://github.com/browser-use/browser-use", note: "Make websites readable for AI agents and run actions autonomously." },
      { id: 18, name: "Skyvern", stars: "Active", url: "https://github.com/Skyvern-AI/skyvern", note: "Automate browser workflows using LLMs and computer vision." },
      { id: 19, name: "Stagehand", stars: "Active", url: "https://github.com/browserbase/stagehand", note: "An AI-first web agent built on Playwright for resilient selectors." },
      { id: 20, name: "Playwright MCP", stars: "Active", url: "https://github.com/microsoft/playwright-mcp", note: "Playwright support for the Model Context Protocol." },
      { id: 21, name: "Steel Browser", stars: null, url: "https://github.com/steel-dev/steel-browser", note: "Cloud browser designed specifically for AI agents and web scraping." },
      { id: 22, name: "Firecrawl", stars: null, url: "https://github.com/mendableai/firecrawl", note: "Convert any website into clean markdown or structured data." },
      { id: 23, name: "Crawl4AI", stars: null, url: "https://github.com/unclecode/crawl4ai", note: "Fast, minimal, and LLM-friendly web crawler and scraper." },
      { id: 24, name: "ScrapeGraphAI", stars: null, url: "https://github.com/VinciGit00/Scrapegraph-ai", note: "Python library for web scraping using LLMs and direct graph logic." }
    ]
  },
  {
    category: "Memory Systems",
    categoryId: "memory-systems",
    icon: "[MEM]",
    description: "Persistent storage, context compression, and vector databases for long-term agent memory.",
    items: [
      { id: 25, name: "Mem0", stars: null, url: "https://github.com/mem0ai/mem0", note: "The memory layer for personalized AI applications." },
      { id: 26, name: "Letta (MemGPT)", stars: null, url: "https://github.com/letta-ai/letta", note: "Build virtual agents with long-term memory and computer interface tools." },
      { id: 27, name: "Zep", stars: null, url: "https://github.com/getzep/zep", note: "A fast, scalable building block for LLM app production memory." },
      { id: 28, name: "Claude-Mem", stars: null, url: "https://github.com/thedotmack/claude-mem", note: "Custom memory management integration specifically for Anthropic Claude." },
      { id: 29, name: "Supermemory", stars: null, url: "https://github.com/supermemoryai/supermemory", note: "Build your own second brain with bookmarks, PDFs, and links." },
      { id: 30, name: "Chroma", stars: null, url: "https://github.com/chroma-core/chroma", note: "The open-source AI application database for semantic embedding search." },
      { id: 31, name: "Weaviate", stars: null, url: "https://github.com/weaviate/weaviate", note: "Open-source vector database that stores both objects and embeddings." },
      { id: 32, name: "Qdrant", stars: null, url: "https://github.com/qdrant/qdrant", note: "Vector similarity search engine with an extended filtering support." }
    ]
  },
  {
    category: "MCP Ecosystem",
    categoryId: "mcp-ecosystem",
    icon: "[MCP]",
    description: "Model Context Protocol servers linking AI models to APIs, files, and local applications.",
    items: [
      { id: 33, name: "Model Context Protocol", stars: null, url: "https://github.com/modelcontextprotocol", note: "Anthropic's open standard for connecting AI models to data sources." },
      { id: 34, name: "Awesome MCP Servers", stars: null, url: "https://github.com/punkpeye/awesome-mcp-servers", note: "A curated list of Model Context Protocol servers." },
      { id: 35, name: "Playwright MCP", stars: null, url: "https://github.com/microsoft/playwright-mcp", note: "Playwright-based browser automation for MCP-compatible clients." },
      { id: 36, name: "Filesystem MCP", stars: null, url: "https://github.com/modelcontextprotocol/servers", note: "Enables read/write file access and operations for MCP agents." },
      { id: 37, name: "GitHub MCP", stars: null, url: "https://github.com/modelcontextprotocol/servers", note: "Integration allowing agents to create issues, reviews, and pull requests." },
      { id: 38, name: "Slack MCP", stars: null, url: "https://github.com/modelcontextprotocol/servers", note: "Enables agents to query channels, post messages, and read history." },
      { id: 39, name: "PostgreSQL MCP", stars: null, url: "https://github.com/modelcontextprotocol/servers", note: "Allows agents to query database tables, describe schemas, and join tables." },
      { id: 40, name: "Google Drive MCP", stars: null, url: "https://github.com/modelcontextprotocol/servers", note: "Allows models to read and list documents inside Google Drive folders." }
    ]
  },
  {
    category: "Voice Agents",
    categoryId: "voice-agents",
    icon: "[VOICE]",
    description: "Real-time speech-to-text, synthesis, and conversational audio loops for voice assistants.",
    items: [
      { id: 41, name: "Pipecat", stars: null, url: "https://github.com/pipecat-ai/pipecat", note: "Framework for building voice-to-voice agents with low latency." },
      { id: 42, name: "LiveKit Agents", stars: null, url: "https://github.com/livekit/agents", note: "Real-time conversational voice and video framework." },
      { id: 43, name: "Vocode", stars: null, url: "https://github.com/vocodedev/vocode-core", note: "Build voice-based applications including phone calls and smart assistants." },
      { id: 44, name: "OpenVoice", stars: null, url: "https://github.com/myshell-ai/OpenVoice", note: "Instant voice cloning library with speed, tone, and accent controls." },
      { id: 45, name: "Whisper", stars: null, url: "https://github.com/openai/whisper", note: "OpenAI's robust speech recognition model for transcription." },
      { id: 46, name: "Faster-Whisper", stars: null, url: "https://github.com/SYSTRAN/faster-whisper", note: "Re-implementation of OpenAI's Whisper using CTranslate2 for 4x speedup." },
      { id: 47, name: "Kokoro", stars: null, url: "https://github.com/hexgrad/kokoro", note: "Extremely lightweight and fast TTS engine with high quality audio." },
      { id: 48, name: "MeloTTS", stars: null, url: "https://github.com/myshell-ai/MeloTTS", note: "High-quality multi-lingual Text-to-Speech library by MyShell." }
    ]
  },
  {
    category: "Workflow Automation",
    categoryId: "workflow-automation",
    icon: "[FLOW]",
    description: "Visual automation node flow builders and unified portals for custom SaaS automations.",
    items: [
      { id: 49, name: "n8n", stars: null, url: "https://github.com/n8n-io/n8n", note: "Node-based workflow automation engine with native AI integration." },
      { id: 50, name: "Dify", stars: null, url: "https://github.com/langgenius/dify", note: "An LLM application development platform that simplifies RAG and workflow." },
      { id: 51, name: "Flowise", stars: null, url: "https://github.com/FlowiseAI/Flowise", note: "Drag & drop UI to build custom LLM flows and agentic loops." },
      { id: 52, name: "Activepieces", stars: null, url: "https://github.com/activepieces/activepieces", note: "Open-source Zapier alternative focused on simplicity and self-hosting." },
      { id: 53, name: "SuperAGI", stars: null, url: "https://github.com/TransformerOptimus/SuperAGI", note: "Developer-first autonomous AI agent framework." },
      { id: 54, name: "Langflow", stars: null, url: "https://github.com/langflow-ai/langflow", note: "Low-code prototyping tool for LangChain and multi-agent systems." },
      { id: 55, name: "OpenWebUI", stars: null, url: "https://github.com/open-webui/open-webui", note: "User-friendly WebUI for local LLMs, supporting Ollama and OpenAI APIs." },
      { id: 56, name: "AnythingLLM", stars: null, url: "https://github.com/Mintplex-Labs/anything-llm", note: "All-in-one local AI application with full RAG, workspace memory, and agent support." }
    ]
  },
  {
    category: "Computer Use",
    categoryId: "computer-use",
    icon: "[OS]",
    description: "Enabling models to view screens, click coordinates, type inputs, and interact with OS interfaces.",
    items: [
      { id: 57, name: "Open Interpreter", stars: null, url: "https://github.com/OpenInterpreter/open-interpreter", note: "Let LLMs run code on your computer locally in a natural language interface." },
      { id: 58, name: "OmniParser", stars: null, url: "https://github.com/microsoft/OmniParser", note: "Screen parsing tool to convert UI screenshots into structured control points." },
      { id: 59, name: "Agent-S", stars: null, url: "https://github.com/simular-ai/Agent-S", note: "GUI agent framework for complex OS tasks and digital workspace control." },
      { id: 60, name: "UI-TARS", stars: null, url: "https://github.com/bytedance/UI-TARS", note: "End-to-end model framework optimized for GUI interactions." },
      { id: 61, name: "OS-Copilot", stars: null, url: "https://github.com/OS-Copilot/OS-Copilot", note: "An autonomous agent that manages files, terminals, and applications inside operating systems." },
      { id: 62, name: "OpenClaw", stars: null, url: "https://github.com/openclaw/openclaw", note: "A modular agent framework for desktop and application automation." },
      { id: 63, name: "Computer-Use Demo", stars: null, url: "https://github.com/anthropics/anthropic-quickstarts", note: "Anthropic's official starter kit demonstrating Claude's computer use API." }
    ]
  },
  {
    category: "Evaluation & Observability",
    categoryId: "evaluation-observability",
    icon: "[EVAL]",
    description: "Trace LLM calls, monitor cost, run automated assertions, and test output quality.",
    items: [
      { id: 64, name: "DSPy", stars: null, url: "https://github.com/stanfordnlp/dspy", note: "Programmatic optimization of LLM prompts and weights instead of manual tuning." },
      { id: 65, name: "Promptfoo", stars: null, url: "https://github.com/promptfoo/promptfoo", note: "Test-driven development for LLM apps: evaluate prompts, models, and RAG pipelines." },
      { id: 66, name: "Braintrust", stars: null, url: "https://github.com/braintrustdata/braintrust-sdk", note: "Enterprise-grade evaluation, tracing, and logging platform for AI products." },
      { id: 67, name: "Langfuse", stars: null, url: "https://github.com/langfuse/langfuse", note: "Open-source LLM engineering platform: tracing, evaluations, prompt management, and metrics." },
      { id: 68, name: "Phoenix", stars: null, url: "https://github.com/Arize-ai/phoenix", note: "AI observability platform for tracing, evaluations, and vector dataset analysis." },
      { id: 69, name: "TruLens", stars: null, url: "https://github.com/truera/trulens", note: "Evaluate and track LLM applications through automated feedback loops." },
      { id: 70, name: "Ragas", stars: null, url: "https://github.com/explodinggradients/ragas", note: "Framework for evaluating Retrieval Augmented Generation (RAG) pipelines." }
    ]
  },
  {
    category: "Deployment & Infrastructure",
    categoryId: "deployment-infrastructure",
    icon: "[INFRA]",
    description: "High-performance inference engines, local servers, routing layers, and database backends.",
    items: [
      { id: 71, name: "LiteLLM", stars: null, url: "https://github.com/BerriAI/litellm", note: "Call 100+ LLM APIs using the OpenAI format. Unified routing and load balancing." },
      { id: 72, name: "BentoML", stars: null, url: "https://github.com/bentoml/BentoML", note: "Build production-ready AI services. Package and serve models with ease." },
      { id: 73, name: "Ray Serve", stars: null, url: "https://github.com/ray-project/ray", note: "Scalable model serving library built on top of Ray for distributed compute." },
      { id: 74, name: "Ollama", stars: null, url: "https://github.com/ollama/ollama", note: "Run large language models locally on macOS, Linux, and Windows." },
      { id: 75, name: "vLLM", stars: null, url: "https://github.com/vllm-project/vllm", note: "A high-throughput and memory-efficient LLM serving engine with PagedAttention." },
      { id: 76, name: "LocalAI", stars: null, url: "https://github.com/mudler/LocalAI", note: "Free, open-source OpenAI alternative that runs local models on consumer hardware." },
      { id: 77, name: "Supabase", stars: null, url: "https://github.com/supabase/supabase", note: "The open-source Firebase alternative: Postgres DB, Auth, Realtime, and Edge Functions." }
    ]
  },
  {
    category: "Founder SaaS Alternatives",
    categoryId: "saas-alternatives",
    icon: "[SAAS]",
    description: "Open-source alternatives to massive tech platforms. High-potential business opportunities for modern founders.",
    items: [
      {
        id: 78,
        name: "Cal.com",
        stars: "OS Calendly",
        url: "https://github.com/calcom/cal.com",
        note: "Fork it, white-label it, and sell to dentists/lawyers for $200/month. The founders hit $5M ARR in 3 years doing exactly this."
      },
      {
        id: 79,
        name: "Plausible Analytics",
        stars: "OS Google Analytics",
        url: "https://github.com/plausible/analytics",
        note: "Privacy-first Google Analytics. Self-host it and resell to agencies for $50/month per client. Bootstrapped to 7 figures by two founders."
      },
      {
        id: 80,
        name: "Ghost",
        stars: "OS Substack",
        url: "https://github.com/TryGhost/Ghost",
        note: "Open-source Substack with 100% margin. 1,000 readers at $5/month equals $60,000 a year. Forever."
      },
      {
        id: 81,
        name: "n8n",
        stars: "OS Zapier",
        url: "https://github.com/n8n-io/n8n",
        note: "Open-source Zapier alternative. Sell custom workflow automation services to businesses for $500–$2,000 per setup."
      },
      {
        id: 82,
        name: "Supabase",
        stars: "OS Firebase",
        url: "https://github.com/supabase/supabase",
        note: "Free Firebase replacement. Build a SaaS in a weekend and charge clients $29–$99/month. They raised $116M validating this market."
      },
      {
        id: 83,
        name: "Medusa",
        stars: "OS Shopify",
        url: "https://github.com/medusajs/medusa",
        note: "Open-source Shopify. Build bespoke e-commerce experiences and take a percentage of sales, without giving Shopify a revenue share."
      },
      {
        id: 84,
        name: "AppFlowy",
        stars: "OS Notion",
        url: "https://github.com/AppFlowy-IO/AppFlowy",
        note: "Open-source Notion. Sell secure, self-hosted workspaces to enterprises worried about data leaks. A massive market."
      },
      {
        id: 85,
        name: "Coolify",
        stars: "OS Vercel/Heroku",
        url: "https://github.com/coollabsio/coolify",
        note: "Manage deployments on any server. Charge developers $20/month to replace their $200+ Vercel/Heroku bills."
      },
      {
        id: 86,
        name: "Listmonk",
        stars: "OS Mailchimp",
        url: "https://github.com/knadh/listmonk",
        note: "Send unlimited newsletters/emails for the cheap cost of AWS SES. Resell it to agencies at a 10x markup."
      },
      {
        id: 87,
        name: "Penpot",
        stars: "OS Figma",
        url: "https://github.com/penpot/penpot",
        note: "Open-source Figma alternative. Sell self-hosted design environments to agencies who refuse to upload sensitive client files to SaaS clouds."
      }
    ]
  }
];
