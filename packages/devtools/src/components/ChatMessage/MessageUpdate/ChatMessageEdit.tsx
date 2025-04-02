import { FC, memo } from 'react';
import { Message } from '@microsoft/spark.api';
import { useLocation } from 'react-router';

import { useCardStore } from '../../../stores/CardStore';
import EditComposeBox from '../../ComposeBox/EditComposeBox';

interface ChatMessageEditProps {
  message: Message;
  onEditComplete: (messageId: string, content: string, attachments: any[]) => void;
  onEditCancel: () => void;
  isUpdating: boolean;
  onCardProcessed?: () => void;
}

const ChatMessageEdit: FC<ChatMessageEditProps> = memo(
  ({ message, onEditComplete, onEditCancel, onCardProcessed }) => {
    const location = useLocation();
    const { targetComponent, draftMessage } = useCardStore();
    const fromCards = location.state?.isEditing && targetComponent === 'edit';

    return (
      <EditComposeBox
        value={fromCards ? (draftMessage ?? message.body?.content) : message.body?.content}
        editingMessageId={message.id}
        defaultAttachments={message.attachments}
        onComplete={(content, attachments) => onEditComplete(message.id, content, attachments)}
        onCancel={onEditCancel}
        onCardProcessed={onCardProcessed}
      />
    );
  }
);

ChatMessageEdit.displayName = 'ChatMessageEdit';
export default ChatMessageEdit;
