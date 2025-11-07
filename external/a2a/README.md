# Teams: a2a

<p>
    <a href="https://www.npmjs.com/package/@microsoft/teams.a2a" target="_blank">
        <img src="https://img.shields.io/npm/v/@microsoft/teams.a2a" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.a2a?activeTab=code" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@microsoft/teams.a2a" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.a2a?activeTab=dependencies" target="_blank">
        <img src="https://img.shields.io/librariesio/release/npm/@microsoft/teams.a2a" />
    </a>
    <a href="https://www.npmjs.com/package/@microsoft/teams.a2a" target="_blank">
        <img src="https://img.shields.io/npm/dw/@microsoft/teams.a2a" />
    </a>
    <a href="https://microsoft.github.io/teams.ts" target="_blank">
        <img src="https://img.shields.io/badge/📖 docs-open-blue" />
    </a>
</p>

This is a plugin that enables your Teams agent to be used as an A2A agent.

> [!NOTE]
> The A2A protocol is still early in development and hence this package is fairly experimental.

- [What is A2A?](https://google.github.io/A2A)

## Server

Teams SDK allows your applications to easily be accessible via Teams. However, using this plugin, you can also enable your agent to be used as an A2A agent so that it can be used by other A2A clients.

### Configuration

Configuring the App to use the A2APlugin simply requires the `AgentCard`.

```ts
import { schema, A2APlugin } from "@microsoft/teams.a2a";
import { App } from "@microsoft/teams.apps";

declare const myAgentCard: AgentCard;

const app = new App({
    plugins: [
        new A2APlugin({
            agentCard: myAgentCard,
        }),
    ],
});
```

With this simple configuration, the A2APlugin will listen for A2A requests on the `/a2a` path and return the agent card when requested.

### Agent Card

The plugin automatically exposes the agent card at the path `/.well-known/agent.json`.

```mermaid
sequenceDiagram
    participant A2A Client
    participant App
    participant A2APlugin
    A2A Client->>App: /.well-known/agent.json
    App->>A2APlugin: Call A2APlugin
    A2APlugin->>A2A Client: Return agent card
```

### A2A Requests

```mermaid
sequenceDiagram
    participant A2A Client
    participant App
    participant A2APlugin
    participant YourEventHandler
    A2A Client->>App: /task/send
    App->>A2APlugin: Call A2APlugin
    A2APlugin->>YourEventHandler: Call your event handler a2a:message
    YourEventHandler->>A2APlugin: Call respond
    A2APlugin->>A2A Client: Return response
```

Handling A2A requests is similar to handling app-requests. Simply add an event handler for the `a2a:message` event. You may `accumulateArtifacts` to iteratively accumulate artifacts for the task, or simply `respond` with the final result.

> [!NOTE]
> You must have only a single handler that calls `respond`. And you **must** call `respond` as the last step in your handler. This is because the `respond` function resolves the open request to the caller.

```ts
app.event(
    "a2a:message",
    async ({ taskContext, respond, accumulateArtifacts }) => {
        // The taskContext contains details about the task request
        const result = await myEventHandler(taskContext, accumulateArtifacts);
        await respond(result);
    },
);
```

## Client

The A2A client is able to call different A2A servers. You are able to use the `AgentManager` to call different A2A Servers.

```ts
import { AgentManager } from "@microsoft/teams.a2a";

const agentManager = new AgentManager();

agentManager.use("my-agent", "https://my-agent.com/a2a");
await agentManager.sendTask("my-agent", {
    id: continueTaskId || generateRequestId().toString(),
    message: {
      role: 'user',
      parts: [{ type: 'text' as const, text: message }],
    },
    {},
});
```

If you are using the `A2APlugin` described above, you can use the `clientManger` property in that plugin object to get an instance of the `AgentManager` and use it to send tasks proactively to different A2A servers.

### Chat Prompt

A2A is most effective when used with an LLM. The `A2AClientPlugin` can be used to add a plugin to your chat prompt that will allow you to automatically include A2A agents as a possible source of interaction. The interaction can be outlined as below:

```mermaid
sequenceDiagram
    participant User
    participant ChatPrompt
    participant A2AClientPlugin
    participant AgentManager
    participant AgentClient
    participant LLM
    participant TargetAgent

    alt config
        User->>ChatPrompt: "use" with A2A server details
        ChatPrompt->>A2AClientPlugin: configure usable a2a server
        A2AClientPlugin->>AgentManager: register new potential client
    end
    alt send
        User->>ChatPrompt: Send initial message
        ChatPrompt->>A2AClientPlugin: configure system prompt
        A2AClientPlugin->>AgentManager: get agent cards
        AgentManager->>AgentClient: for each get agent card
        AgentClient-->>AgentManager: agent card
        AgentManager-->>A2AClientPlugin: all agent cards
        A2AClientPlugin-->>ChatPrompt: updated system prompt
        ChatPrompt->>A2AClientPlugin: configure tool-calls (onBuildFunctions)
        A2AClientPlugin-->>ChatPrompt: Configured tool calls
        ChatPrompt->>LLM: send-message
        LLM-->>ChatPrompt: Call A2A TargetAgent
        ChatPrompt->>A2AClientPlugin: Handler for calling A2A TargetAgent
        A2AClientPlugin->>AgentManager: Call TargetAgent with message
        AgentManager->>AgentClient: Call TargetAgent with message
        TargetAgent-->>AgentClient: Return task (e.g., completed, input-required)
        AgentClient->>AgentManager: Result task
        AgentManager->>A2AClientPlugin: Result task
        A2AClientPlugin->>ChatPrompt: Result task
        ChatPrompt-->>User: Respond with final result or follow-up
    end
```

Usage:

```ts
import { A2APlugin } from "@microsoft/teams.a2a";
import { ChatPrompt } from "@microsoft/teams.ai";

const plugin = new A2APlugin();

const chatPrompt = new ChatPrompt({
    plugins: [plugin],
}).usePlugin("a2a", {
    key: "my-agent",
    url: "https://my-agent.com/a2a",
});

const result = await chatPrompt.sendMessage("Hello, world!");

console.log(result);
```
