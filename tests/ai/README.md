# Sample: ai

a sample demonstrating various ai capabilities

## Prerequisites

-   Node.js version 20 or later
-   An Microsoft 365 development account. If you don't have one, you can get one for free by signing up for the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program).

## Run

```bash
npm install
```

To run on teams, run:

```bash
npx @microsoft/teams.cli config add ttk.basic
```

This will add all the ttk related configs.

Then run the sample via ttk.

## Usage

1. Set .env file with your Azure OpenAI API key (or OpenAI API Key):

```bash
AZURE_OPENAI_API_KEY=<your_azure_openai_api_key>
AZURE_OPENAI_ENDPOINT=<your_azure_openai_api_endpoint>
AZURE_OPENAI_MODEL_DEPLOYMENT_NAME=<your_azure_openai_model_deployment_name>
AZURE_OPENAI_API_VERSION=<your_azure_openai_api_version>

# Alternatively, set the OpenAI API key:
OPENAI_API_KEY=<sk-your_openai_api_key>
```

2. From Teams, or DevTools, use any of the following commands to trigger specific scenarios.

| Scenario               | Usage                                             | Description                                                 |
| ---------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| Simple LLM check       | `hi`                                              | This is to show basic ChatPrompts working                   |
| Streaming              | `stream <your query>`                             | Shows streaming working                                     |
| Function calling       | `pokemon <your pokemon query>`                    | Shows function calling working                              |
| Multi-Function calling | `weather <what is my weather like?>`              | Shows multi-function calling working                        |
| Feedback               | `feedback <any text>`                             | Shows feedback loop                                         |
| Rag                    | `rag <any query preferably from the rag dataset>` | Shows rag pattern and citation                              |
| Stateful interactions  | `<any query not matching above`                   | Shows messages being persisted across multiple interactions |
| Structured output      | `structured-output <any query>`                   | Shows structured output working                             |
