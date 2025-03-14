import { useContext } from 'react';
import { ActivityContext } from '../stores/ActivityStore';
import { ConversationType } from '../types/ConversationType';
/**
 * Get conversation type from the message id
 */
const useConversationScope = (id: string):  ConversationType => {
  const { list: activities } = useContext(ActivityContext);
  const activityEvent = activities.find((activity) => activity.body.id === id);

  // If the activity is not found, default to personal. If someone thinks of a better default, lmk.
  if (!activityEvent) {
    return 'personal'
  }
  return activityEvent?.body.conversation.conversationType;
}

export default useConversationScope;