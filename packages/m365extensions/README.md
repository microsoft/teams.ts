# Microsoft Teams M365 Extension

M365 Extension package for bridging `@microsoft/teams.apps` into an `@microsoft/agents-hosting` `AgentApplication`.

`useTeamsSdk` creates a Teams SDK `App`, wires its outbound token provider to the Agents SDK connection manager, and installs the M365 Extension bridge so Teams activities with matching Teams SDK routes are handled by Teams SDK while unmatched Teams turns and non-Teams channels fall through to Agents SDK handlers.

## Install

```bash
npm install @microsoft/teams.m365extensions
```
