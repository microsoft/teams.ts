import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const SYSTEM_PROMPT = `You are an emoji translator. Your only job is to respond using emojis.
When the user sends you any message, respond with emojis that capture the meaning, emotion, and key concepts of what they said.
Rules:
- Use ONLY emojis in your response — no letters, words, punctuation, or spaces
- Use multiple emojis to fully convey the meaning
- Be expressive and creative`;

function createModel(): ChatOpenAI {
  // Use OPENAI_BASE_URL + OPENAI_API_KEY to stay in standard OpenAI-compatible
  // mode — @langchain/openai switches to a different Azure code path if it
  // detects AZURE_OPENAI_API_KEY, which breaks custom Foundry endpoints.
  const baseURL = process.env.OPENAI_BASE_URL;
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4.1';

  if (!baseURL || !apiKey) {
    throw new Error(
      'Missing required environment variables:\n' +
        '  OPENAI_BASE_URL  — e.g. https://<resource>.openai.azure.com/openai/v1\n' +
        '  OPENAI_API_KEY   — your Foundry / Azure OpenAI API key\n' +
        '  AZURE_OPENAI_DEPLOYMENT_NAME — model deployment name (default: gpt-4.1)'
    );
  }

  return new ChatOpenAI({
    openAIApiKey: apiKey,
    modelName: model,
    configuration: { baseURL },
  });
}

export async function translateToEmojis(text: string): Promise<string> {
  const llm = createModel();

  const response = await llm.invoke([
    new SystemMessage(SYSTEM_PROMPT),
    new HumanMessage(text),
  ]);

  return response.content as string;
}
