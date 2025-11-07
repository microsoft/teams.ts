# <img src="./assets/icons/icon.png" width="50px" /> Teams SDK: Typescript

<a href="#">
    <img src="https://img.shields.io/github/package-json/v/microsoft/teams.ts?label=npm" />
</a>

a suite of packages used to build on the Teams Platform.

<a href="https://microsoft.github.io/teams-sdk" target="_blank">
    <img src="https://img.shields.io/badge/📖 Getting Started-blue?style=for-the-badge" />
</a>

- [Scripts](#scripts)
- [Packages](#packages)
- [Tests](#tests)

## Scripts

> all scripts can be run for a particular workspace by appending `--workspace=${name}`

### Build

```bash
$: npm run build
```

### Clean

```bash
$: npm run clean
```

### Lint

```bash
$: npm run lint
```

```bash
$: npm run lint:fix
```

### Dev

> for apps/tests only

```bash
$: npm run dev
```

### Test

> for packages only

```bash
$: npm run test
```

## Packages

> ℹ️ core packages used to build client/server apps for Teams.

- [`@microsoft/teams.apps`](./packages/apps/README.md)
- [`@microsoft/teams.ai`](./packages/ai/README.md)
- [`@microsoft/teams.api`](./packages/api/README.md)
- [`@microsoft/teams.botbuilder`](./packages/botbuilder/README.md)
- [`@microsoft/teams.cards`](./packages/cards/README.md)
- [`@microsoft/teams.cli`](./packages/cli/README.md)
- [`@microsoft/teams.client`](./packages/client/README.md)
- [`@microsoft/teams.common`](./packages/common/README.md)
- [`@microsoft/teams.config`](./packages/config/README.md)
- [`@microsoft/teams.dev`](./packages/dev/README.md)
- [`@microsoft/teams.devtools`](./packages/devtools/README.md)
- [`@microsoft/teams.graph`](./packages/graph/README.md)
- [`@microsoft/teams.graph-endpoints`](./packages/graph-endpoints/README.md)
- [`@microsoft/teams.graph-endpoints-beta`](./packages/graph-endpoints-beta/README.md)
- [`@microsoft/teams.openai`](./packages/openai/README.md)

## External Packages

> ℹ️ external packages (typically plugins) used to integrate with other platforms.

- [`@microsoft/teams.mcp`](./external/mcp/README.md)
- [`@microsoft/teams.mcpclient`](./external/mcpclient/README.md)

## Test apps

> ℹ️ used to test the SDK or as a visual sample of how certain features can be implemented.

> ⚠️ **WARNING** these apps are changed often and are not intended to be used outside the
> projects monorepo. To easily setup a new project please use the **templates** available via
> the `@microsoft/teams.cli` and follow the
> [Getting Started](https://microsoft.github.io/teams-sdk/typescript/getting-started) documentation!

- [`@tests/echo`](./tests/echo/README.md)
- [`@tests/auth`](./tests/auth/README.md)
- [`@tests/botbuilder`](./tests/botbuilder/README.md)
- [`@tests/graph`](./tests/graph/README.md)
- [`@tests/lights`](./tests/lights/README.md)
- [`@tests/tab`](./tests/tab/README.md)
- [`@tests/mcp`](./tests/mcp/README.md)

## Links

- [Teams Developer Portal: Apps](https://dev.teams.microsoft.com/apps)
- [Teams Toolkit](https://www.npmjs.com/package/@microsoft/teamsapp-cli)
