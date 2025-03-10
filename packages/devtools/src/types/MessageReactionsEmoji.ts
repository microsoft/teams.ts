import { MessageReactionType } from '@microsoft/spark.api';

export const MessageReactionsEmoji: Array<{
  readonly label: string;
  readonly reaction: MessageReactionType;
}> = [
  { label: '👍', reaction: 'like' },
  { label: '❤️', reaction: 'heart' },
  { label: '😆', reaction: 'laugh' },
  { label: '😮', reaction: 'surprised' },
];
