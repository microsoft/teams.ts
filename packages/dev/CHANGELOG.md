# @microsoft/teams.dev

## 2.0.4

### Patch Changes

- Fix backward compat issue with TokenCredentials
- Updated dependencies
  - @microsoft/teams.api@2.0.4
  - @microsoft/teams.apps@2.0.4
  - @microsoft/teams.cards@2.0.4
  - @microsoft/teams.common@2.0.4
  - @microsoft/teams.graph@2.0.4

## 2.0.3

### Patch Changes

- Regional oauth support, additional auth mechanisms support, resync graph endpoints
- Updated dependencies
  - @microsoft/teams.api@2.0.3
  - @microsoft/teams.apps@2.0.3
  - @microsoft/teams.cards@2.0.3
  - @microsoft/teams.common@2.0.3
  - @microsoft/teams.graph@2.0.3

## 2.0.2

### Patch Changes

- Number of bug fixes and CLI improvements
- Updated dependencies
  - @microsoft/teams.api@2.0.2
  - @microsoft/teams.apps@2.0.2
  - @microsoft/teams.cards@2.0.2
  - @microsoft/teams.common@2.0.2
  - @microsoft/teams.graph@2.0.2

## 2.0.1

### Patch Changes

- Update templates to use latest instad of preview
- Updated dependencies
  - @microsoft/teams.api@2.0.1
  - @microsoft/teams.apps@2.0.1
  - @microsoft/teams.cards@2.0.1
  - @microsoft/teams.common@2.0.1
  - @microsoft/teams.graph@2.0.1

## 2.0.0

- First Stable V2 Release

### Major Changes

- 1d5f350: v2 preview release

### Patch Changes

- a231813: Variety of security fixes.
  Now every incoming request to the server is validated to ensure that it is coming from a trusted source.
  Other minor fixes and improvements.
- 05085e8: streaming bug fix
- 7a0e5f6: fix cli template versions
- 9bc2cee: - Add streamable http support to MCPClient
  - Adds a way to "send" messages from a tab-app to the associated conversation
- 9b08518: add csharp support to CLI officially, add a2a support via new package, devtools updates
- 00d3edb: Python additions to CLI, A2A package bump to 0.3.0
- ee61ca0: - Update graph packages to be tree-shakeable and use different calling strategy
  - Minor bug fixes
- 70cb729: Disable automatic function calling, and show structured output
- 2337a4f: Add MCP client template
- e6f9b56: - Added user-token in activity context
  - For app-graph, use tenant-specific tokens to make graph calls
  - Fixed ATK issues related to multi-tenant deprecation
  - Fixed bot-builder adapter which broke in the last release
- 9e2414b: cli template updates; botbuilder plugin custom server options; system route overrides;
- 753af04: Integrate Adaptive Cards designer with DevTools, some bug fixes, naming updates
- Updated dependencies [a231813]
- Updated dependencies [05085e8]
- Updated dependencies [7a0e5f6]
- Updated dependencies [1d5f350]
- Updated dependencies [9bc2cee]
- Updated dependencies [9b08518]
- Updated dependencies [00d3edb]
- Updated dependencies [ee61ca0]
- Updated dependencies [70cb729]
- Updated dependencies [2337a4f]
- Updated dependencies [e6f9b56]
- Updated dependencies [9e2414b]
- Updated dependencies [753af04]
  - @microsoft/teams.api@2.0.0
  - @microsoft/teams.apps@2.0.0
  - @microsoft/teams.cards@2.0.0
  - @microsoft/teams.common@2.0.0
  - @microsoft/teams.graph@2.0.0

## 2.0.0-preview.12

### Patch Changes

- Python additions to CLI, A2A package bump to 0.3.0
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.12
  - @microsoft/teams.apps@2.0.0-preview.12
  - @microsoft/teams.cards@2.0.0-preview.12
  - @microsoft/teams.common@2.0.0-preview.12
  - @microsoft/teams.graph@2.0.0-preview.12

## 2.0.0-preview.11

### Patch Changes

- cli template updates; botbuilder plugin custom server options; system route overrides;
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.11
  - @microsoft/teams.apps@2.0.0-preview.11
  - @microsoft/teams.cards@2.0.0-preview.11
  - @microsoft/teams.common@2.0.0-preview.11
  - @microsoft/teams.graph@2.0.0-preview.11

## 2.0.0-preview.10

### Patch Changes

- - Update graph packages to be tree-shakeable and use different calling strategy
  - Minor bug fixes
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.10
  - @microsoft/teams.apps@2.0.0-preview.10
  - @microsoft/teams.cards@2.0.0-preview.10
  - @microsoft/teams.common@2.0.0-preview.10
  - @microsoft/teams.graph@2.0.0-preview.10

## 2.0.0-preview.9

### Patch Changes

- A number of auth related fixes, ATK fixes due to multi-tenant deprecation, and a streaming fix
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.9
  - @microsoft/teams.apps@2.0.0-preview.9
  - @microsoft/teams.cards@2.0.0-preview.9
  - @microsoft/teams.common@2.0.0-preview.9
  - @microsoft/teams.graph@2.0.0-preview.9

## 2.0.0-preview.8

### Patch Changes

- Variety of security fixes.
  Now every incoming request to the server is validated to ensure that it is coming from a trusted source.
  Other minor fixes and improvements.
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.8
  - @microsoft/teams.apps@2.0.0-preview.8
  - @microsoft/teams.cards@2.0.0-preview.8
  - @microsoft/teams.common@2.0.0-preview.8
  - @microsoft/teams.graph@2.0.0-preview.8

## 2.0.0-preview.7

### Patch Changes

- - Add streamable http support to MCPClient
  - Adds a way to "send" messages from a tab-app to the associated conversation
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.7
  - @microsoft/teams.apps@2.0.0-preview.7
  - @microsoft/teams.cards@2.0.0-preview.7
  - @microsoft/teams.common@2.0.0-preview.7
  - @microsoft/teams.graph@2.0.0-preview.7

## 2.0.0-preview.6

### Patch Changes

- Disable automatic function calling, and show structured output
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.6
  - @microsoft/teams.apps@2.0.0-preview.6
  - @microsoft/teams.cards@2.0.0-preview.6
  - @microsoft/teams.common@2.0.0-preview.6
  - @microsoft/teams.graph@2.0.0-preview.6

## 2.0.0-preview.5

### Patch Changes

- streaming bug fix
- Updated dependencies
  - @microsoft/teams.apps@2.0.0-preview.5
  - @microsoft/teams.api@2.0.0-preview.5
  - @microsoft/teams.cards@2.0.0-preview.5
  - @microsoft/teams.common@2.0.0-preview.5
  - @microsoft/teams.graph@2.0.0-preview.5

## 2.0.0-preview.4

### Patch Changes

- Integrate Adaptive Cards designer with DevTools, some bug fixes, naming updates
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.4
  - @microsoft/teams.apps@2.0.0-preview.4
  - @microsoft/teams.cards@2.0.0-preview.4
  - @microsoft/teams.common@2.0.0-preview.4
  - @microsoft/teams.graph@2.0.0-preview.4

## 2.0.0-preview.3

### Patch Changes

- add csharp support to CLI officially, add a2a support via new package, devtools updates
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.3
  - @microsoft/teams.apps@2.0.0-preview.3
  - @microsoft/teams.cards@2.0.0-preview.3
  - @microsoft/teams.common@2.0.0-preview.3
  - @microsoft/teams.graph@2.0.0-preview.3

## 2.0.0-preview.2

### Patch Changes

- Add MCP client template
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.2
  - @microsoft/teams.apps@2.0.0-preview.2
  - @microsoft/teams.cards@2.0.0-preview.2
  - @microsoft/teams.common@2.0.0-preview.2
  - @microsoft/teams.graph@2.0.0-preview.2

## 2.0.0-preview.1

### Patch Changes

- fix cli template versions
- Updated dependencies
  - @microsoft/teams.api@2.0.0-preview.1
  - @microsoft/teams.apps@2.0.0-preview.1
  - @microsoft/teams.cards@2.0.0-preview.1
  - @microsoft/teams.common@2.0.0-preview.1
  - @microsoft/teams.graph@2.0.0-preview.1

## 2.0.0-preview.0

### Major Changes

- v2 preview release

### Patch Changes

- Updated dependencies
  - @microsoft/teams.common@2.0.0-preview.0
  - @microsoft/teams.cards@2.0.0-preview.0
  - @microsoft/teams.graph@2.0.0-preview.0
  - @microsoft/teams.apps@2.0.0-preview.0
  - @microsoft/teams.api@2.0.0-preview.0

## 0.2.14

### Patch Changes

- fix cli bug and add mcp client customizations like headers and logging

## 0.2.13

### Patch Changes

- bugfixes, devtools updates, mcp client updates

## 0.2.12

### Patch Changes

- app startup fetch token bugfix

## 0.2.11

### Patch Changes

- dev plugin bug fix

## 0.2.10

### Patch Changes

- fix docs links and fix a couple minor issues

## 0.2.9

### Patch Changes

- config fetch response fix

## 0.2.8

### Patch Changes

- fix docs links

## 0.2.7

### Patch Changes

- package rename

## 0.2.6

### Patch Changes

- fix cli for lower node versions

## 0.2.5

### Patch Changes

- add mcp client, ai plugins, devtools improvements

## 0.2.4

### Patch Changes

- fix reflect-metadata dependency

## 0.2.3

### Patch Changes

- devtools fixes, plugins refactor, ai package fixes, new cli ttk configuration

## 0.2.2

### Patch Changes

- add mcp package and update ai package with use method

## 0.2.1

### Patch Changes

- change @azure/openai from peer dependency to regular

## 0.2.0

### Minor Changes

- refactor ai package interface, devtools updates

## 0.1.3

### Patch Changes

- add template logic to cli for more accurate templates/configs

## 0.1.2

### Patch Changes

- fix bug in `next` routing method

## 0.1.1

### Patch Changes

- adaptive cards action invoke response fix, tests for cards

## 0.1.0

### Minor Changes

- devtools fixes, breaking type changes due to rename/refactor

## 0.0.6

### Patch Changes

- fix middleware bug in removeMentionsText
- Updated dependencies
  - @microsoft/teams.apps@0.0.6
  - @microsoft/teams.api@0.0.6
  - @microsoft/teams.common@0.0.6
  - @microsoft/teams.graph@0.0.6

## 0.0.5

### Patch Changes

- add removeMentionsText util and middleware, update docs
- Updated dependencies
  - @microsoft/teams.api@0.0.5
  - @microsoft/teams.apps@0.0.5
  - @microsoft/teams.common@0.0.5
  - @microsoft/teams.graph@0.0.5

## 0.0.4

### Patch Changes

- fix auth credential error
- Updated dependencies
  - @microsoft/teams.api@0.0.4
  - @microsoft/teams.apps@0.0.4
  - @microsoft/teams.common@0.0.4
  - @microsoft/teams.graph@0.0.4

## 0.0.3

### Patch Changes

- add support for more types of bot authentication, devtools fixes
- Updated dependencies
  - @microsoft/teams.api@0.0.3
  - @microsoft/teams.apps@0.0.3
  - @microsoft/teams.common@0.0.3
  - @microsoft/teams.graph@0.0.3

## 0.0.2

### Patch Changes

- fix cli binary name
- Updated dependencies
  - @microsoft/teams.api@0.0.2
  - @microsoft/teams.apps@0.0.2
  - @microsoft/teams.common@0.0.2
  - @microsoft/teams.graph@0.0.2

## 0.0.1

### Patch Changes

- port to new repository
- Updated dependencies
  - @microsoft/teams.api@0.0.1
  - @microsoft/teams.apps@0.0.1
  - @microsoft/teams.common@0.0.1
  - @microsoft/teams.graph@0.0.1
