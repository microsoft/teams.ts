import { ChatPrompt, IChatModel } from '@microsoft/teams.ai';
import {
  ActivityLike,
  IMessageActivity,
  MessageActivity,
  SentActivity,
} from '@microsoft/teams.api';

// This store would ideally be persisted in a database
export const storedFeedbackByMessageId = new Map<
  string,
  {
    incomingMessage: string;
    outgoingMessage: string;
    likes: number;
    dislikes: number;
    feedbacks: string[];
  }
>();

export const handleFeedbackLoop = async (
  model: IChatModel,
  activity: IMessageActivity,
  send: (activity: ActivityLike) => Promise<SentActivity>
) => {
  const prompt = new ChatPrompt({
    instructions: 'You are a helpful assistant.',
    model,
  });

  const result = await prompt.send(activity.text);

  if (result) {
    const { id: sentMessageId } = await send(
      result.content != null
        ? new MessageActivity(result.content)
            .addAiGenerated()
            /** Add feedback buttons via this method */
            .addFeedback()
        : 'I did not generate a response.'
    );

    storedFeedbackByMessageId.set(sentMessageId, {
      incomingMessage: activity.text,
      outgoingMessage: result.content ?? '',
      likes: 0,
      dislikes: 0,
      feedbacks: [],
    });

  }
};
