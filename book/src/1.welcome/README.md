# 👋 Welcome to Teams AI SDK (v2)

Teams AI SDK (v2) is a modern, flexible SDK that empowers developers to build powerful applications, bots, and AI agents for Microsoft Teams with less code and fewer dependencies. It provides a cohesive set of tools and abstractions that work together seamlessly, allowing you to focus on creating intelligent and effective solutions rather than managing complex configurations and boilerplate code.

## ✨ Key Features

- **🧩 Streamlined Development** - Minimize boilerplate code and reduce setup complexity
- **🔄 Unified Tooling** - A cohesive suite that consolidates functionality previously spread across multiple libraries
- **🤖 AI-Native Abstractions** - Built-in support for integrating AI capabilities into your Teams applications
- **🛠️ Integrated Developer Tools** - Local development, debugging, and testing tools built right in
- **📦 Low Dependency** - Designed for longevity with minimal external dependencies
- **🔌 Flexible & Unopinionated** - Provides tools and abstractions without dictating application architecture

## 🚀 Quick Start

Get up and running with a new Teams AI SDK (v2) application in just three steps:

```bash
# 1. Install the CLI
npm install -g @microsoft/teams.cli@latest

# 2. Create a new project
teams new my-teams-app --start

# 3. Open your browser
# The app is now running at http://localhost:3978
```

That's it! Your application is now running locally. For more detailed instructions, check out the [Getting Started](../2.getting-started/README.md) guide.

## 🧭 Where to Next?

| If you want to... | Go to... |
|-------------------|----------|
| **Learn the basics** | [Getting Started](../2.getting-started/README.md) |
| **Create a bot** | [Basics: Listening to Messages](../4.basics/2.on-message.md) |
| **Build an AI agent** | [AI Integration](../9.ai/README.md) |
| **Create interactive cards** | [Cards](../7.cards/README.md) |
| **Add message extensions** | [Message Extensions](../6.message-extensions/README.md) |
| **Test your app locally** | [DevTools](../8.devtools/README.md) |
| **Use the CLI** | [CLI Reference](../3.cli/README.md) |

## 📦 Package Overview

Teams AI SDK (v2) is organized into focused packages that work together seamlessly:

### Core Functionality

- [`@microsoft/teams.apps`](https://www.npmjs.com/package/@microsoft/teams.apps) - Tools for building server-side apps for Microsoft Teams
- [`@microsoft/teams.api`](https://www.npmjs.com/package/@microsoft/teams.api) - Core types and client implementations for the Teams Platform API
- [`@microsoft/teams.client`](https://www.npmjs.com/package/@microsoft/teams.client) - Client for creating app/bot surfaces such as tabs
- [`@microsoft/teams.common`](https://www.npmjs.com/package/@microsoft/teams.common) - Common implementations used by all packages (e.g., logging)
- [`@microsoft/teams.config`](https://www.npmjs.com/package/@microsoft/teams.config) - Configuration management for Teams AI SDK applications

### AI & Integration

- [`@microsoft/teams.ai`](https://www.npmjs.com/package/@microsoft/teams.ai) - Tools for integrating apps with LLMs and enabling multi-agent scenarios
  - **Models**: Interface with LLMs, handling input/output
  - **Templates**: Parse instructions with support for custom templating languages
  - **Prompts**: Orchestrate everything with state management and function definitions
- [`@microsoft/teams.openai`](https://www.npmjs.com/package/@microsoft/teams.openai) - AI model implementations for OpenAI
- [`@microsoft/teams.graph`](https://www.npmjs.com/package/@microsoft/teams.graph) - Microsoft Graph API client
- [`@microsoft/teams.botbuilder`](https://www.npmjs.com/package/@microsoft/teams.botbuilder) - Integration with existing BotBuilder adapters

### UI & Experience

- [`@microsoft/teams.cards`](https://www.npmjs.com/package/@microsoft/teams.cards) - Adaptive Cards typings and builders for type-safe card design

### Developer Tools

- [`@microsoft/teams.cli`](https://www.npmjs.com/package/@microsoft/teams.cli) - CLI for building apps with project scaffolding and AI-assisted development
- [`@microsoft/teams.dev`](https://www.npmjs.com/package/@microsoft/teams.dev) - Developer tools to streamline the development process
- [`@microsoft/teams.devtools`](https://www.npmjs.com/package/@microsoft/teams.devtools) - Local development and debugging tools
