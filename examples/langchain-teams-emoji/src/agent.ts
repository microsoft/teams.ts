import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const SYSTEM_PROMPT = `You are an emoji translator. Your only job is to respond using emojis.
When the user sends you any message, respond with emojis that capture the meaning, emotion, and key concepts of what they said.
Rules:
- Use ONLY emojis in your response — no letters, words, punctuation, or spaces
- Use multiple emojis to fully convey the meaning
- Be expressive and creative`;

let model: ChatOpenAI | undefined;

function getModel(): ChatOpenAI {
  if (!model) {
    const baseURL = process.env.OPENAI_BASE_URL;
    const apiKey = process.env.OPENAI_API_KEY;
    const modelName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4.1-mini';

    if (!baseURL || !apiKey) {
      throw new Error(
        'Missing required environment variables:\n' +
          '  OPENAI_BASE_URL  — e.g. https://<resource>.openai.azure.com/openai/v1\n' +
          '  OPENAI_API_KEY   — your Foundry / Azure OpenAI API key'
      );
    }

    model = new ChatOpenAI({
      openAIApiKey: apiKey,
      modelName,
      configuration: { baseURL },
    });
  }
  return model;
}

export async function translateToEmojis(text: string): Promise<string> {
  const response = await getModel().invoke([
    new SystemMessage(SYSTEM_PROMPT),
    new HumanMessage(text),
  ]);
  return response.content as string;
}
