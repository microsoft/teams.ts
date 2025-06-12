import { ChatPrompt, Message } from '@microsoft/teams.ai';
import {
  ActivityLike,
  IMessageActivity,
  SentActivity
} from '@microsoft/teams.api';
import { OpenAIChatModel } from '@microsoft/teams.openai';

export const handleStructuredOutput = async (
  model: OpenAIChatModel,
  activity: IMessageActivity,
  send: (activity: ActivityLike) => Promise<SentActivity>
) => {
  const messages: Message[] = [];
  const prompt = new ChatPrompt({
    instructions: 'You are a helpful assistant. You MUST use the tools provided to you to respond to the user',
    model,
    messages,
  }).function('stucturify', 'Structurify the response', {
    type: 'object',
    properties: {
      response: {
        type: 'string',
        description: 'The response to the user\'s message',
      }
    },
    required: ['response']
  }, () => {
    throw new Error('Not implemented');
  }).function('pong', 'only call this when the user says ping', {
    type: 'object',
    properties: {
    }
  }, () => {
    throw new Error('Not implemented');
  });
  const result = await prompt.send(activity.text, { autoFunctionCalling: false });
  const functionCallArgs = result.function_calls?.[0].arguments;
  await send(`The LLM responed with the following structured output: ${JSON.stringify(functionCallArgs, undefined, 2)}"`);

  const firstCall = result.function_calls?.[0];
  if (firstCall?.name === 'pong') {
    console.log('ponging');
    messages.push({
      role: 'function',
      function_id: firstCall.id,
      content: 'pong',
    });
    const result = await prompt.send('What should we do next?', { messages, autoFunctionCalling: true });
    const functionCallArgs = result.function_calls?.[0].arguments;
    await send(`The LLM responed with the following structured output: ${JSON.stringify(functionCallArgs, undefined, 2)}.`);
  }
};
