import { FC, memo } from 'react';
import { Message } from '@microsoft/spark.api';
import { Card } from '@microsoft/spark.cards';

import EditComposeBox from '../../ComposeBox/EditComposeBox';

interface ChatMessageEditProps {
  message: Message;
  onEditComplete: (messageId: string, content: string, attachments: any[]) => void;
  onEditCancel: () => void;
  isUpdating: boolean;
  currentCard?: Card | null;
  onCardProcessed?: () => void;
}

const ChatMessageEdit: FC<ChatMessageEditProps> = memo(
  ({ message, onEditComplete, onEditCancel, currentCard, onCardProcessed }) => (
    <EditComposeBox
      value={message.body?.content}
      defaultAttachments={message.attachments}
      onComplete={(content, attachments) => onEditComplete(message.id, content, attachments)}
      onCancel={onEditCancel}
      currentCard={currentCard}
      onCardProcessed={onCardProcessed}
    />
  )
);

ChatMessageEdit.displayName = 'ChatMessageEdit';
export default ChatMessageEdit;
