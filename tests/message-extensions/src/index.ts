import { cardAttachment } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { Card } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common/logging';
import { DevtoolsPlugin } from '@microsoft/teams.dev';
import { createCard, createConversationMembersCard, createDummyCards, createLinkUnfurlCard, createMessageDetailsCard } from './card';

const app = new App({
  logger: new ConsoleLogger('@tests/message-extensions', { level: 'debug' }),
  plugins: [new DevtoolsPlugin()],
});

app.on('message', async ({ send, activity }) => {
  await send({ type: 'typing' });
  await send(`you said "${activity.text}"`);
});

app.on('message.ext.query-link', async ({ activity }) => {
  const { url } = activity.value;

  if (!url) {
    return {
      status: 400,
      body: {}
    };
  }

  const { card, thumbnail } = createLinkUnfurlCard(url);
  const attachment = {
    ...cardAttachment('adaptive', card),
    preview: cardAttachment('thumbnail', thumbnail)
  };

  return {
    composeExtension: {
      type: 'result',
      attachmentLayout: 'list',
      attachments: [attachment]
    }
  };
});

app.on('message.ext.submit', async ({ send, activity }) => {
  const { commandId } = activity.value;
  let card: Card;

  if (commandId === 'createCard') {
    // activity.value.commandContext == "compose"
    card = createCard(activity.value.data);
  } else if (commandId === 'getMessageDetails' && activity.value.messagePayload) {
    // activity.value.commandContext == "message"
    card = createMessageDetailsCard(activity.value.messagePayload);
  } else {
    throw new Error(`Unknown commandId: ${commandId}`);
  }

  await send(card);

  return {
    status: 200,
    body: {},
  };
});

app.on('message.ext.open', async ({ activity, api }) => {
  const conversationId = activity.conversation.id
  const members = await api.conversations.members(conversationId).get()
  const card = createConversationMembersCard(members)

  return {
    status: 200,
    body: {
      task: {
        type: 'continue',
        value: {
          title: 'Conversation members',
          height: 'small',
          width: 'small',
          card: cardAttachment('adaptive', card),
        }
      }
    }
  }
});

app.on('message.ext.query', async ({ activity }) => {
  const { commandId } = activity.value;
  const searchQuery = activity.value.parameters![0].value;

  if (commandId == 'searchQuery') {
    const cards = await createDummyCards(searchQuery);
    const attachments = cards.map(({card, thumbnail}) => { 
      return {
        ...cardAttachment('adaptive', card),
        preview: cardAttachment('thumbnail', thumbnail)
      }
    });

    return {
      composeExtension: {
        type: 'result',
        attachmentLayout: 'list',
        attachments: attachments
      }
    };
  }

  return {
    status: 400,
    body: {}
  };
});

(async () => {
  await app.start();
})();
