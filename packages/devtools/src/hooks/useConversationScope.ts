import { useActivityStore } from '../stores/ActivityStore';
import { ConversationType } from '../types/ConversationType';
import { useMemo } from 'react';

/**
 * Get conversation type from the message id
 */
const useConversationScope = (id: string): ConversationType => {
  const { byId } = useActivityStore();

  return useMemo(() => {
    const activity = byId[id];
    return activity?.body.conversation.conversationType ?? 'personal';
  }, [byId, id]);
};

export default useConversationScope;
