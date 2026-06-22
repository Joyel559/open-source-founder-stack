<div align="center">
  <img src="assets/560205641163845311.jpeg" width="140" height="140" alt="Founder Stack System Logo" style="border-radius: 8px;" />
  <h1>open-source-founder-stack</h1>
  <p><b>[SYSTEM STATUS: ACTIVE] // [HOST_01]</b></p>
  <p>A curated directory of production-grade libraries, frameworks, systems, and self-hosted alternatives for software developers and founders.</p>

  <p>
    <a href="https://github.com/Joyel559/the-open-source-founder-stack/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Joyel559/the-open-source-founder-stack?color=4ade80&style=flat-square" alt="License" /></a>
    <a href="https://github.com/sindresorhus/awesome"><img src="https://img.shields.io/badge/awesome-list-4ade80?style=flat-square" alt="Awesome List" /></a>
    <a href="index.html"><img src="https://img.shields.io/badge/interactive-dashboard-3b82f6?style=flat-square" alt="Interactive Dashboard" /></a>
  </p>
</div>

---

### Description

This repository lists tools and libraries categorized by their operational function. 
* **Interactive Portal**: A frontend dashboard (`index.html`) featuring search filters, live statistics, scrolling index navigation, and clipboard tools. It is rendered dynamically directly from this README file.
* **Factual Metadata**: Every listing includes programming language, license type, self-hosting availability, and primary use case.

---

### Table of Contents

* [[01] Agent Frameworks](#01-agent-frameworks)
* [[02] Coding Agents](#02-coding-agents)
* [[03] Browser Agents](#03-browser-agents)
* [[04] Memory Systems](#04-memory-systems)
* [[05] MCP Ecosystem](#05-mcp-ecosystem)
* [[06] Voice Agents](#06-voice-agents)
* [[07] Workflow Automation](#07-workflow-automation)
* [[08] Computer Use](#08-computer-use)
* [[09] Evaluation & Observability](#09-evaluation--observability)
* [[10] Deployment & Infrastructure](#10-deployment--infrastructure)
* [[11] Founder SaaS Alternatives](#11-founder-saas-alternatives)

---

## 01 Agent Frameworks

Orchestrate, build, and deploy multi-agent systems with state-of-the-art frameworks.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 01 | [AutoGen](https://github.com/microsoft/autogen) | ★ 57K | Python | MIT | Yes | Multi-agent conversation framework by Microsoft. |
| 02 | [CrewAI](https://github.com/crewAIInc/crewAI) | ★ 50K | Python | MIT | Yes | Role-play, autonomous agent orchestration framework. |
| 03 | [LangGraph](https://github.com/langchain-ai/langgraph) | ★ 20K | Python/TS | MIT | Yes | Build stateful, multi-actor applications with LLMs as graphs. |
| 04 | [Agno](https://github.com/agno-agi/agno) | ★ 30K | Python | Apache-2.0 | Yes | Lightweight framework for building multi-agent systems with memory. |
| 05 | [SmolAgents](https://github.com/huggingface/smolagents) | ★ 18K | Python | Apache-2.0 | Yes | Hugging Face's compact agent library leveraging code-writing agents. |
| 06 | [PydanticAI](https://github.com/pydantic/pydantic-ai) | ★ 15K | Python | MIT | Yes | Type-safe agent framework built on top of Pydantic. |
| 07 | [Haystack](https://github.com/deepset-ai/haystack) | ★ 22K | Python | Apache-2.0 | Yes | End-to-end LLM orchestration framework for search and RAG. |
| 08 | [Semantic Kernel](https://github.com/microsoft/semantic-kernel) | ★ 25K | C#/Python | MIT | Yes | Integrate cutting-edge LLM technology into standard programming languages. |

---

## 02 Coding Agents

AI engineers that edit codebases, run commands, and automate software development.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 09 | [OpenHands](https://github.com/All-Hands-AI/OpenHands) | ★ 70K | Python/JS | MIT | Yes | Open-source agentic platform for software engineering. |
| 10 | [Aider](https://github.com/Aider-AI/aider) | ★ 35K | Python | Apache-2.0 | Yes | AI pair programming in your terminal, directly editing local files. |
| 11 | [SWE-Agent](https://github.com/SWE-agent/SWE-agent) | ★ 18K | Python | MIT | Yes | Resolves real-world GitHub issues using an Agent-Computer Interface. |
| 12 | [Continue](https://github.com/continuedev/continue) | ★ 30K | TS/JS | Apache-2.0 | Yes | The leading open-source AI code assistant for VS Code and JetBrains. |
| 13 | [Roo Code](https://github.com/RooVetGit/Roo-Code) | ★ 25K | TS/JS | MIT | Yes | AI coding assistant with custom system prompts and file controls. |
| 14 | [Cline](https://github.com/cline/cline) | ★ 61K | TS | MIT | Yes | Autonomous developer agent that can create, edit, test, and run code. |
| 15 | [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) | ★ 55K | Python | MIT | Yes | Specify what you want to build, the AI asks clarifying questions and generates it. |
| 16 | [OpenCode](https://github.com/sst/opencode) | N/A | Go | MIT | Yes | A toolkit for building web interfaces with agent-assisted coding. |

---

## 03 Browser Agents

Visual web scrapers, automated QA tools, and browser automation powered by LLMs.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 17 | [Browser Use](https://github.com/browser-use/browser-use) | ★ Active | Python | MIT | Yes | Make websites readable for AI agents and run actions autonomously. |
| 18 | [Skyvern](https://github.com/Skyvern-AI/skyvern) | ★ Active | Python | Apache-2.0 | Yes | Automate browser workflows using LLMs and computer vision. |
| 19 | [Stagehand](https://github.com/browserbase/stagehand) | ★ Active | TS | Apache-2.0 | Yes | An AI-first web agent built on Playwright for resilient selectors. |
| 20 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | ★ Active | TS | MIT | Yes | Playwright support for the Model Context Protocol. |
| 21 | [Steel Browser](https://github.com/steel-dev/steel-browser) | N/A | TS/JS | Apache-2.0 | Yes | Cloud browser designed specifically for AI agents and web scraping. |
| 22 | [Firecrawl](https://github.com/mendableai/firecrawl) | N/A | TS | AGPL-3.0 | Yes | Convert any website into clean markdown or structured data. |
| 23 | [Crawl4AI](https://github.com/unclecode/crawl4ai) | N/A | Python | Apache-2.0 | Yes | Fast, minimal, and LLM-friendly web crawler and scraper. |
| 24 | [ScrapeGraphAI](https://github.com/VinciGit00/Scrapegraph-ai) | N/A | Python | MIT | Yes | Python library for web scraping using LLMs and direct graph logic. |

---

## 04 Memory Systems

Persistent storage, context compression, and vector databases for long-term agent memory.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 25 | [Mem0](https://github.com/mem0ai/mem0) | N/A | Python | Apache-2.0 | Yes | The memory layer for personalized AI applications. |
| 26 | [Letta (MemGPT)](https://github.com/letta-ai/letta) | N/A | Python | MIT | Yes | Build virtual agents with long-term memory and computer interface tools. |
| 27 | [Zep](https://github.com/getzep/zep) | N/A | Go | Apache-2.0 | Yes | A fast, scalable building block for LLM app production memory. |
| 28 | [Claude-Mem](https://github.com/thedotmack/claude-mem) | N/A | Python | MIT | Yes | Custom memory management integration specifically for Anthropic Claude. |
| 29 | [Supermemory](https://github.com/supermemoryai/supermemory) | N/A | TS | MIT | Yes | Build your own second brain with bookmarks, PDFs, and links. |
| 30 | [Chroma](https://github.com/chroma-core/chroma) | N/A | Python/C++ | Apache-2.0 | Yes | The open-source AI database for developer embedding searches. |
| 31 | [Weaviate](https://github.com/weaviate/weaviate) | N/A | Go | BSD-3 | Yes | Open-source vector database that stores both objects and embeddings. |
| 32 | [Qdrant](https://github.com/qdrant/qdrant) | N/A | Rust | Apache-2.0 | Yes | Vector similarity search engine with extended filtering support. |

---

## 05 MCP Ecosystem

Model Context Protocol servers linking AI models to APIs, files, and local applications.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 33 | [Model Context Protocol](https://github.com/modelcontextprotocol) | N/A | TS/Python | MIT | Yes | Anthropic's open standard for connecting AI models to data sources. |
| 34 | [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) | N/A | N/A | MIT | N/A | A curated list of Model Context Protocol servers. |
| 35 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | N/A | TS | MIT | Yes | Playwright-based browser automation for MCP-compatible clients. |
| 36 | [Filesystem MCP](https://github.com/modelcontextprotocol/servers) | N/A | TS | MIT | Yes | Enables read/write file access and operations for MCP agents. |
| 37 | [GitHub MCP](https://github.com/modelcontextprotocol/servers) | N/A | TS | MIT | Yes | Integration allowing agents to create issues, reviews, and pull requests. |
| 38 | [Slack MCP](https://github.com/modelcontextprotocol/servers) | N/A | TS | MIT | Yes | Enables agents to query channels, post messages, and read history. |
| 39 | [PostgreSQL MCP](https://github.com/modelcontextprotocol/servers) | N/A | TS | MIT | Yes | Allows agents to query database tables, describe schemas, and join tables. |
| 40 | [Google Drive MCP](https://github.com/modelcontextprotocol/servers) | N/A | TS | MIT | Yes | Allows models to read and list documents inside Google Drive folders. |

---

## 06 Voice Agents

Real-time speech-to-text, synthesis, and conversational audio loops for voice assistants.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 41 | [Pipecat](https://github.com/pipecat-ai/pipecat) | N/A | Python | BSD-3 | Yes | Framework for building voice-to-voice agents with low latency. |
| 42 | [LiveKit Agents](https://github.com/livekit/agents) | N/A | Python | Apache-2.0 | Yes | Real-time conversational voice and video framework. |
| 43 | [Vocode](https://github.com/vocodedev/vocode-core) | N/A | TS/Python | MIT | Yes | Build voice-based applications including phone calls and smart assistants. |
| 44 | [OpenVoice](https://github.com/myshell-ai/OpenVoice) | N/A | Python | MIT | Yes | Instant voice cloning library with speed, tone, and accent controls. |
| 45 | [Whisper](https://github.com/openai/whisper) | N/A | Python | MIT | Yes | OpenAI's robust speech recognition model for transcription. |
| 46 | [Faster-Whisper](https://github.com/SYSTRAN/faster-whisper) | N/A | Python | MIT | Yes | Re-implementation of OpenAI's Whisper using CTranslate2 for 4x speedup. |
| 47 | [Kokoro](https://github.com/hexgrad/kokoro) | N/A | Python | Apache-2.0 | Yes | Extremely lightweight and fast TTS engine with high quality audio. |
| 48 | [MeloTTS](https://github.com/myshell-ai/MeloTTS) | N/A | Python | MIT | Yes | High-quality multi-lingual Text-to-Speech library by MyShell. |

---

## 07 Workflow Automation

Visual automation node flow builders and unified portals for custom SaaS automations.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 49 | [n8n](https://github.com/n8n-io/n8n) | N/A | TS | Sustainable | Yes | Node-based workflow automation engine with native AI integration. |
| 50 | [Dify](https://github.com/langgenius/dify) | N/A | TS/Python | Agency | Yes | An LLM application development platform that simplifies RAG and workflows. |
| 51 | [Flowise](https://github.com/FlowiseAI/Flowise) | N/A | TS | Apache-2.0 | Yes | Drag & drop UI to build custom LLM flows and agentic loops. |
| 52 | [Activepieces](https://github.com/activepieces/activepieces) | N/A | TS | MIT | Yes | Open-source Zapier alternative focused on simplicity and self-hosting. |
| 53 | [SuperAGI](https://github.com/TransformerOptimus/SuperAGI) | N/A | Python | Developer | Yes | Developer-first autonomous AI agent framework. |
| 54 | [Langflow](https://github.com/langflow-ai/langflow) | N/A | Python | MIT | Yes | Low-code prototyping tool for LangChain and multi-agent systems. |
| 55 | [OpenWebUI](https://github.com/open-webui/open-webui) | N/A | Python/TS | MIT | Yes | User-friendly WebUI for local LLMs, supporting Ollama and OpenAI APIs. |
| 56 | [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | N/A | TS | MIT | Yes | All-in-one local AI application with full RAG, workspace memory, and agent support. |

---

## 08 Computer Use

Enabling models to view screens, click coordinates, type inputs, and interact with OS interfaces.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 57 | [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) | N/A | Python | MIT | Yes | Let LLMs run code on your computer locally in a natural language interface. |
| 58 | [OmniParser](https://github.com/microsoft/OmniParser) | N/A | Python | MIT | Yes | Screen parsing tool to convert UI screenshots into structured control points. |
| 59 | [Agent-S](https://github.com/simular-ai/Agent-S) | N/A | Python | MIT | Yes | GUI agent framework for complex OS tasks and digital workspace control. |
| 60 | [UI-TARS](https://github.com/bytedance/UI-TARS) | N/A | Python | Apache-2.0 | Yes | End-to-end model framework optimized for GUI interactions. |
| 61 | [OS-Copilot](https://github.com/OS-Copilot/OS-Copilot) | N/A | Python | MIT | Yes | An autonomous agent that manages files, terminals, and apps inside operating systems. |
| 62 | [OpenClaw](https://github.com/openclaw/openclaw) | N/A | Python | MIT | Yes | A modular agent framework for desktop and application automation. |
| 63 | [Computer-Use Demo](https://github.com/anthropics/anthropic-quickstarts) | N/A | Python | MIT | Yes | Anthropic's official starter kit demonstrating Claude's computer use API. |

---

## 09 Evaluation & Observability

Trace LLM calls, monitor cost, run automated assertions, and test output quality.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 64 | [DSPy](https://github.com/stanfordnlp/dspy) | N/A | Python | MIT | Yes | Programmatic optimization of LLM prompts and weights instead of manual tuning. |
| 65 | [Promptfoo](https://github.com/promptfoo/promptfoo) | N/A | TS | MIT | Yes | Test-driven development for LLM apps: evaluate prompts, models, and RAG pipelines. |
| 66 | [Braintrust](https://github.com/braintrustdata/braintrust-sdk) | N/A | TS/Python | MIT | Yes | Enterprise-grade evaluation, tracing, and logging platform for AI products. |
| 67 | [Langfuse](https://github.com/langfuse/langfuse) | N/A | TS | AGPL-3.0 | Yes | Open-source LLM engineering platform: tracing, evaluations, prompt management, and metrics. |
| 68 | [Phoenix](https://github.com/Arize-ai/phoenix) | N/A | Python | Apache-2.0 | Yes | AI observability platform for tracing, evaluations, and vector dataset analysis. |
| 69 | [TruLens](https://github.com/truera/trulens) | N/A | Python | Apache-2.0 | Yes | Evaluate and track LLM applications through automated feedback loops. |
| 70 | [Ragas](https://github.com/explodinggradients/ragas) | N/A | Python | Apache-2.0 | Yes | Framework for evaluating Retrieval Augmented Generation (RAG) pipelines. |

---

## 10 Deployment & Infrastructure

High-performance inference engines, local servers, routing layers, and database backends.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 71 | [LiteLLM](https://github.com/BerriAI/litellm) | N/A | Python | MIT | Yes | Call 100+ LLM APIs using the OpenAI format. Unified routing and load balancing. |
| 72 | [BentoML](https://github.com/bentoml/BentoML) | N/A | Python | Apache-2.0 | Yes | Build production-ready AI services. Package and serve models with ease. |
| 73 | [Ray Serve](https://github.com/ray-project/ray) | N/A | Python | Apache-2.0 | Yes | Scalable model serving library built on top of Ray for distributed compute. |
| 74 | [Ollama](https://github.com/ollama/ollama) | N/A | Go | MIT | Yes | Run large language models locally on macOS, Linux, and Windows. |
| 75 | [vLLM](https://github.com/vllm-project/vllm) | N/A | Python | Apache-2.0 | Yes | A high-throughput and memory-efficient LLM serving engine with PagedAttention. |
| 76 | [LocalAI](https://github.com/mudler/LocalAI) | N/A | Go | MIT | Yes | Free, open-source OpenAI alternative that runs local models on consumer hardware. |
| 77 | [Supabase](https://github.com/supabase/supabase) | N/A | TS/Go | MIT | Yes | The open-source Firebase alternative: Postgres DB, Auth, Realtime, and Edge Functions. |

---

## 11 Founder SaaS Alternatives

Open-source alternatives to massive tech platforms. High-potential business opportunities for modern founders.

| # | Repository | Stars / Role | Language | License | Self-Host | Description / Purpose |
|---|------------|--------------|----------|---------|-----------|-----------------------|
| 78 | [Cal.com](https://github.com/calcom/cal.com) | Alt to Calendly | TS/JS | AGPL-3.0 | Yes | Open-source scheduling platform. Allows white-labeling and commercial self-hosting. |
| 79 | [Plausible Analytics](https://github.com/plausible/analytics) | Alt to Google Analytics | Elixir | AGPL-3.0 | Yes | Privacy-first analytics platform. Lightweight Google Analytics alternative suitable for self-hosted agency client dashboards. |
| 80 | [Ghost](https://github.com/TryGhost/Ghost) | Alt to Substack | JS | MIT | Yes | Open-source publishing platform for newsletters, blogs, and subscription-based content businesses. |
| 81 | [n8n](https://github.com/n8n-io/n8n) | Alt to Zapier | TS | Fair-Code | Yes | Node-based workflow automation engine with native AI integrations. |
| 82 | [Supabase](https://github.com/supabase/supabase) | Alt to Firebase | TS/Go | MIT | Yes | Open-source Firebase alternative providing database, auth, real-time subscriptions, and storage. |
| 83 | [Medusa](https://github.com/medusajs/medusa) | Alt to Shopify | TS | MIT | Yes | Modular open-source commerce engine for building customizable, scalable digital storefronts. |
| 84 | [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | Alt to Notion | Flutter/Rust | AGPL-3.0 | Yes | Open-source workspace for notes, wikis, and tasks, offering self-hosted deployments for data privacy. |
| 85 | [Coolify](https://github.com/coollabsio/coolify) | Alt to Vercel/Heroku | PHP | Apache-2.0 | Yes | Open-source, self-hosted platform-as-a-service (PaaS) to automate applications and database deployments. |
| 86 | [Listmonk](https://github.com/knadh/listmonk) | Alt to Mailchimp | Go | AGPL-3.0 | Yes | Self-hosted newsletter and mailing list manager with high-performance bulk email delivery options. |
| 87 | [Penpot](https://github.com/penpot/penpot) | Alt to Figma | Clojure/JS | MPL-2.0 | Yes | Web-based, open-source design and prototyping tool utilizing SVG as a native format. |

---

