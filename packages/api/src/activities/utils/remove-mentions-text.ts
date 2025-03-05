import { MessageSendActivity, MessageUpdateActivity } from '../message';
import { TypingActivity } from '../typing';

/**
 * any activity type that has a `text` property
 */
type TextActivity = MessageSendActivity | MessageUpdateActivity | TypingActivity;

export interface RemoveMentionsTextOptions {
  /**
   * the account to remove mentions for
   * by default, all at-mentions listed in `entities` are removed.
   */
  accountId?: string;

  /**
   * when `true`, the inner text of the tag
   * will not be removed
   */
  tagOnly?: boolean;
}

/**
 * remove "\<at>...\</at>" text from an activity
 * @param activity the activity
 */
export function removeMentionsText<TActivity extends TextActivity>(
  activity: TActivity,
  { accountId, tagOnly }: RemoveMentionsTextOptions = {}
): TActivity['text'] {
  if (!activity.text) return;

  let text = activity.text;

  for (const mention of activity.entities?.filter((e) => e.type === 'mention') || []) {
    if (accountId && mention.mentioned.id !== accountId) {
      continue;
    }

    if (mention.text) {
      const textWithoutTags = mention.text.replace('<at>', '').replace('</at>', '');
      text = text.replace(mention.text, !tagOnly ? '' : textWithoutTags);
    } else {
      text = text.replace(
        `<at>${mention.mentioned.name}</at>`,
        !tagOnly ? '' : mention.mentioned.name
      );
    }
  }

  return text.trim();
}
