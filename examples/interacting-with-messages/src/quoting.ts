import { Activity, MessageActivityInput } from '@microsoft/teams.api';
import { IActivityContext } from '@microsoft/teams.apps';

type MessageContext = IActivityContext<Extract<Activity, { type: 'message' }>>;

/**
 * Reports metadata when the inbound message contains a quote.
 * @returns Whether quoted-message metadata was found and reported.
 */
export async function handleQuotedMessage(context: MessageContext): Promise<boolean> {
  const quotes = context.activity.getQuotedMessages();
  if (quotes.length === 0) {
    return false;
  }

  const quote = quotes[0].quotedReply;
  const info = [
    `Quoted message ID: ${quote.messageId}`,
    quote.senderName ? `From: ${quote.senderName}` : null,
    quote.preview ? `Preview: "${quote.preview}"` : null,
    quote.isReplyDeleted ? '(deleted)' : null,
    quote.validatedMessageReference ? '(validated)' : null,
  ].filter(Boolean).join('\n');

  await context.send(`You sent a message with a quoted reply:\n\n${info}`);
  return true;
}

/**
 * Handles the command that replies with an automatic quote.
 * @returns Whether the command matched.
 */
export async function handleQuoteReply(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'quote reply') {
    return false;
  }

  await context.reply('Thanks for your message! This reply auto-quotes it using `reply()`.');
  return true;
}

/**
 * Handles the command that quotes a previously sent message by ID.
 * @returns Whether the command matched.
 */
export async function handleQuoteMessage(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'quote message') {
    return false;
  }

  const sent = await context.send('The meeting has been moved to 3 PM tomorrow.');
  await context.quote(sent.id, 'Just to confirm - does the new time work for everyone?');
  return true;
}

/**
 * Handles the command that composes multiple quotes.
 * @returns Whether the command matched.
 */
export async function handleQuoteBatch(
  context: MessageContext,
  text: string
): Promise<boolean> {
  if (text !== 'quote batch') {
    return false;
  }

  const sentA = await context.send('We need to update the API docs before launch.');
  const sentB = await context.send('The design mockups are ready for review.');
  const sentC = await context.send('CI pipeline is green on main.');
  const message = new MessageActivityInput()
    .addQuote(sentA.id, 'I can take the docs - will have a draft by Thursday.')
    .addQuote(sentB.id, 'Looks great, approved!')
    .addQuote(sentC.id);
  await context.send(message);
  return true;
}
