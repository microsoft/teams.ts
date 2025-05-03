import { ActionSet, Card, Element, Image, OpenUrlAction, TextBlock } from '@microsoft/teams.cards';
import { Account, Message, ThumbnailCard } from '@microsoft/teams.api';

const IMAGE_URL =
  'https://github.com/microsoft/teams-agent-accelerator-samples/raw/main/python/memory-sample-agent/docs/images/memory-thumbnail.png';

// :snippet-start: message-ext-create-card
interface FormData {
  title: string;
  subtitle: string;
  text: string;
}

export function createCard(data: FormData) {
  return new Card(
    new Image(IMAGE_URL),
    new TextBlock(data.title, {
      size: 'large',
      weight: 'bolder',
      color: 'accent',
      style: 'heading',
    }),
    new TextBlock(data.subtitle, {
      size: 'small',
      weight: 'lighter',
      color: 'good',
    }),
    new TextBlock(data.text, {
      wrap: true,
      spacing: 'medium',
    })
  );
}
// :snippet-end: message-ext-create-card

// :snippet-start: message-ext-create-message-details-card
export function createMessageDetailsCard(messagePayload: Message) {
  const cardElements: Element[] = [
    new TextBlock('Message Details', {
      size: 'large',
      weight: 'bolder',
      color: 'accent',
      style: 'heading',
    }),
  ];

  if (messagePayload?.body?.content) {
    cardElements.push(
      new TextBlock('Content', {
        size: 'medium',
        weight: 'bolder',
        spacing: 'medium',
      }),
      new TextBlock(messagePayload.body.content)
    );
  }

  if (messagePayload?.attachments?.length) {
    cardElements.push(
      new TextBlock('Attachments', {
        size: 'medium',
        weight: 'bolder',
        spacing: 'medium',
      }),
      new TextBlock(`Number of attachments: ${messagePayload.attachments.length}`, {
        wrap: true,
        spacing: 'small',
      })
    );
  }

  if (messagePayload?.createdDateTime) {
    cardElements.push(
      new TextBlock('Created Date', {
        size: 'medium',
        weight: 'bolder',
        spacing: 'medium',
      }),
      new TextBlock(messagePayload.createdDateTime, {
        wrap: true,
        spacing: 'small',
      })
    );
  }

  if (messagePayload?.linkToMessage) {
    cardElements.push(
      new TextBlock('Message Link', {
        size: 'medium',
        weight: 'bolder',
        spacing: 'medium',
      }),
      new ActionSet(
        new OpenUrlAction(messagePayload.linkToMessage, {
          title: 'Go to message',
        })
      )
    );
  }

  return new Card(...cardElements);
}
// :snippet-end: message-ext-create-message-details-card

// :snippet-start: message-ext-create-conversation-members-card
export function createConversationMembersCard(members: Account[]) {
  const membersList = members.map((member) => member.name).join(', ');

  return new Card(
    new TextBlock('Conversation members', {
      size: 'medium',
      weight: 'bolder',
      color: 'accent',
      style: 'heading',
    }),
    new TextBlock(membersList, {
      wrap: true,
      spacing: 'small',
    })
  );
}
// :snippet-end: message-ext-create-conversation-members-card

// :snippet-start: message-ext-create-dummy-cards
export async function createDummyCards(searchQuery: string) {
  const dummyItems = [
    {
      title: 'Item 1',
      description: `This is the first item and this is your search query: ${searchQuery}`,
    },
    { title: 'Item 2', description: 'This is the second item' },
    { title: 'Item 3', description: 'This is the third item' },
    { title: 'Item 4', description: 'This is the fourth item' },
    { title: 'Item 5', description: 'This is the fifth item' },
  ];

  const cards = dummyItems.map((item) => {
    return {
      card: new Card(
        new TextBlock(item.title, {
          size: 'large',
          weight: 'bolder',
          color: 'accent',
          style: 'heading',
        }),
        new TextBlock(item.description, {
          wrap: true,
          spacing: 'medium',
        })
      ),
      thumbnail: {
        title: item.title,
        text: item.description,
      } as ThumbnailCard,
    };
  });

  return cards;
}
// :snippet-end: message-ext-create-dummy-cards

// :snippet-start: message-ext-create-link-unfurl-card
export function createLinkUnfurlCard(url: string) {
  const thumbnail = {
    title: 'Unfurled Link',
    text: url,
    images: [
      {
        url: IMAGE_URL,
      },
    ],
  } as ThumbnailCard;

  const card = new Card(
    new TextBlock('Unfurled Link', {
      size: 'large',
      weight: 'bolder',
      color: 'accent',
      style: 'heading',
    }),
    new TextBlock(url, {
      size: 'small',
      weight: 'lighter',
      color: 'good',
    })
  );

  return {
    card,
    thumbnail,
  };
}
// :snippet-end: message-ext-create-link-unfurl-card
