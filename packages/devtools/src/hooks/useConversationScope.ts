import { useMemo } from 'react';

import { useActivityStore } from '../stores/ActivityStore';
import { ConversationType } from '../types/ConversationType';

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
