# 🔧 CLI Reference

The Teams CLI (`@microsoft/teams.cli`) is a command-line tool that helps you create, configure, and manage Teams applications. It provides a streamlined workflow for scaffolding new projects, managing environments, and configuring your applications.

## Overview

The CLI offers several commands to help you work with Teams applications:

| Command | Description |
| :------ | :---------- |
| `new` | Create a new Teams application from a template |
| `config` | Configure an existing Teams application |
| `env` | Manage environment variables and configurations |

## Installation

You can install the Teams CLI globally (recommended):

```sh
npm install -g @microsoft/teams.cli@latest
```

Or use it directly with npx:

```sh
npx @microsoft/teams.cli <command>
```

## Quick Start

To create a new Teams application:

```sh
teams new my-app
```

This will create a new directory called `my-app` with a basic Teams application using the default template.


## Getting Help

You can get help for any command by adding `--help` to the command:

```sh
teams --help
teams new --help
teams config --help
```

## What's Next

The following sections provide detailed documentation for each CLI command, including options, examples, and best practices:

- [Installation](./1.installation.md): Detailed installation instructions
- [Commands](./2.commands.md): Overview of all available commands
- [Templates](./3.templates.md): Available project templates and their features
- [Environments](./4.environments.md): Managing environment variables and configurations
- [Configuration](./5.configuration.md): Configuring your Teams applications
