import { App } from '@microsoft/teams.apps';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
// :snippet-start: ai-imports
import { ChatPrompt } from '@microsoft/teams.ai';
import { OpenAIChatModel } from '@microsoft/teams.openai';
// :snippet-end:
import { handleStatefulConversation } from './stateful-prompts';
import { handleGetWeatherToolCalling, handlePokemonToolCalling } from './tool-calling';

const app = new App({
  plugins: [new DevtoolsPlugin()],
});

const model = new OpenAIChatModel({
  apiKey: process.env.AZURE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  apiVersion: process.env.AZURE_OPENAI_API_VERSION,
  model: process.env.AZURE_OPENAI_MODEL_DEPLOYMENT_NAME!,
});

// Handle "hi" message
// :snippet-start: simple-chat
app.on('message', async ({ send, activity, next }) => {
  // :remove-start:
  if (activity.text.toLowerCase() !== 'hi') {
    next();
    return;
  }
  // :remove-end:
  const model = new OpenAIChatModel({
    apiKey: process.env.AZURE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION,
    model: process.env.AZURE_OPENAI_MODEL_DEPLOYMENT_NAME!,
  });

  const prompt = new ChatPrompt({
    instructions: 'You are a friendly assistant who talks like a pirate',
    model,
  });

  const response = await prompt.send(activity.text);
  if (response.content) {
    await send(response.content);
    // Ahoy, matey! 🏴‍☠️ How be ye doin' this fine day on th' high seas? What can this ol’ salty sea dog help ye with? 🚢☠️
  }
});
// :snippet-end:

/**
 *
 * @param commandStr the user-facing command string
 * @param commandName the name of the command
 * @returns
 */
const extractCommandAndQueryForCommand =
  <TCommandName extends string>(commandStr: string, commandName: TCommandName) =>
  (text: string): { commandName: TCommandName; query: string } | null => {
    const parts = text.split(' ');
    const command = parts.at(0);
    if (!command) {
      return null;
    }
    if (command === commandStr) {
      return { commandName: commandName, query: parts.slice(1).join(' ') };
    }
    return null;
  };

const pokemonCommand = extractCommandAndQueryForCommand('pokemon', 'pokemon-tool-calling');
const weatherCommand = extractCommandAndQueryForCommand('weather', 'get-weather-tool-calling');
const streamCommand = extractCommandAndQueryForCommand('stream', 'streaming-chat');

// Handle "<supported-command> <query>" message
app.on('message', async ({ send, activity, next }) => {
  const commandAndQuery = pokemonCommand(activity.text) || weatherCommand(activity.text);
  if (!commandAndQuery) {
    next();
    return;
  }
  const { commandName, query } = commandAndQuery;
  if (commandName === 'pokemon-tool-calling') {
    await handlePokemonToolCalling(model, query, send);
  } else if (commandName === 'get-weather-tool-calling') {
    await handleGetWeatherToolCalling(model, query, send);
  }
});

// Handle messages that start with stream <query>
// :snippet-start: streaming-chat
app.on('message', async ({ stream, send, activity, next }) => {
  // :remove-start:
  const commandAndQuery = streamCommand(activity.text);
  if (!commandAndQuery) {
    next();
    return;
  }
  const { query } = commandAndQuery;
  // :remove-end:
  // const query = activity.text;

  const prompt = new ChatPrompt({
    instructions: 'You are a friendly assistant who responds on wordy prose',
    model,
  });

  // Notice that we don't `send` the final response back, but
  // `stream` the chunks as they come in
  const response = await prompt.send(query, {
    onChunk: (chunk) => {
      stream.emit(chunk);
    },
  });

  if (activity.conversation.isGroup && response.content) {
    // If the conversation is a group chat, we need to send the final response
    // back to the group chat
    await send(response.content);
  }
});
// :snippet-end:

// Fall through conversation handler
app.on('message', async ({ send, activity }) => {
  await handleStatefulConversation(model, activity, send);
});

(async () => {
  await app.start(+(process.env.PORT || 3000));
})();
