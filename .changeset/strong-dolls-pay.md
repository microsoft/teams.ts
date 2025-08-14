---
"@microsoft/teams.a2a": patch
"@microsoft/teams.mcp": patch
"@microsoft/teams.mcpclient": patch
"@microsoft/teams.ai": patch
"@microsoft/teams.api": patch
"@microsoft/teams.apps": patch
"@microsoft/teams.botbuilder": patch
"@microsoft/teams.cards": patch
"@microsoft/teams.cli": patch
"@microsoft/teams.client": patch
"@microsoft/teams.common": patch
"@microsoft/teams.config": patch
"@microsoft/teams.dev": patch
"@microsoft/teams.devtools": patch
"@microsoft/teams.graph": patch
"@microsoft/teams.openai": patch
---

-   Added user-token in activity context
-   For app-graph, use tenant-specific tokens to make graph calls
-   Fixed ATK issues related to multi-tenant deprecation
-   Fixed bot-builder adapter which broke in the last release
