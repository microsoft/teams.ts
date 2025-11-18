import { ChatPrompt } from '@microsoft/teams.ai';
import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
// :snippet-start: ai-imports
import { OpenAIChatModel } from '@microsoft/teams.openai';
// :snippet-end:

import {
  feedbackLoopCommand,
  pokemonCommand,
  ragCommand,
  streamCommand,
  structuredOutputCommand,
  weatherCommand,
} from './commands';
import { storedFeedbackByMessageId } from './feedback';
import { handleDocumentationSearch } from './simple-rag';
import { handleStatefulConversation } from './stateful-prompts';

const logger = new ConsoleLogger('@tests/ai');

const app = new App({
  logger,
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
app.on('message', async ({ send, activity, next, log }) => {
  // :remove-start:
  if (activity.text.toLowerCase() !== 'hi') {
    await next();
    return;
  }
  log.info('Received "hi" message, responding with AI-generated response');
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
    const activity = new MessageActivity(response.content).addAiGenerated();
    await send(activity);
    // Ahoy, matey! 🏴‍☠️ How be ye doin' this fine day on th' high seas? What can this ol’ salty sea dog help ye with? 🚢☠️
  }
});
// :snippet-end:

// Handle "<supported-command> <query>" message
app.on('message', async ({ send, activity, next, log }) => {
  if (activity.text.toLowerCase().startsWith('docs ')) {
    log.info('Received "docs" command, handling documentation search');
    await handleDocumentationSearch(
      model,
      {
        ...activity,
        text: activity.text.slice(5),
      },
      send,
      log,
    );
    return;
  }

  const commandAndQuery = [
    pokemonCommand,
    weatherCommand,
    feedbackLoopCommand,
    ragCommand,
    structuredOutputCommand,
  ]
    .map((command) => command(activity.text))
    .find(Boolean);
  if (!commandAndQuery) {
    await next();
    return;
  }
  const { commandName, query, handler } = commandAndQuery;
  if (!handler) {
    log.warn(`Command ${commandName} does not have a supplied handler`);
  } else {
    log.info(`Received "${commandName}" command, executing handler`);
    await handler(
      model,
      {
        ...activity,
        text: query,
      },
      send,
      log,
    );
  }
});

// Handle messages that start with stream <query>
// :snippet-start: streaming-chat
app.on('message', async ({ stream, send, activity, next, log }) => {
  // :remove-start:
  const commandAndQuery = streamCommand(activity.text);
  if (!commandAndQuery) {
    await next();
    return;
  }
  log.info('Received "stream" command, processing query');
  const { query } = commandAndQuery;
  // :remove-end:
  // const query = activity.text;

  const prompt = new ChatPrompt({
    instructions: 'You are a friendly assistant who responds in extremely verbose language',
    model,
  });

  // Notice that we don't `send` the final response back, but
  // `stream` the chunks as they come in
  const response = await prompt.send(query, {
    onChunk: (chunk) => {
      stream.emit(chunk);
    },
  });

  if (activity.conversation.isGroup) {
    // If the conversation is a group chat, we need to send the final response
    // back to the group chat
    const activity = new MessageActivity(response.content).addAiGenerated();
    await send(activity);
  } else {
    // We wrap the final response with an AI Generated indicator
    stream.emit(new MessageActivity().addAiGenerated());
  }
});
// :snippet-end:

// Fall through conversation handler
app.on('message', async ({ send, activity, log }) => {
  await handleStatefulConversation(model, activity, send, log);
});

// :snippet-start: feedback-loop-handler
app.on('message.submit.feedback', async ({ activity, log }) => {
  const { reaction, feedback: feedbackJson } = activity.value.actionValue;
  if (activity.replyToId == null) {
    log.warn(`No replyToId found for messageId ${activity.id}`);
    return;
  }
  const existingFeedback = storedFeedbackByMessageId.get(activity.replyToId);
  /**
   * feedbackJson looks like:
   * {"feedbackText":"Nice!"}
   */
  if (!existingFeedback) {
    log.warn(`No feedback found for messageId ${activity.id}`);
  } else {
    storedFeedbackByMessageId.set(activity.id, {
      ...existingFeedback,
      likes: existingFeedback.likes + (reaction === 'like' ? 1 : 0),
      dislikes: existingFeedback.dislikes + (reaction === 'dislike' ? 1 : 0),
      feedbacks: [...existingFeedback.feedbacks, feedbackJson],
    });
  }
});
// :snippet-end:

app.start(process.env.PORT || 3978).catch(console.error);
