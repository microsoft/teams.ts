import { MentionEntity } from '../../models';
import { IMessageActivity, IMessageUpdateActivity } from '../message';
import { ITypingActivity } from '../typing';

/**
 * any activity type that has a `text` property
 */
type TextActivity = IMessageActivity | IMessageUpdateActivity | ITypingActivity;

export type StripMentionsTextOptions = {
  /**
   * the account to remove mentions for
   * by default, all at-mentions listed in `entities` are removed.
   */
  accountId?: string;

  /**
   * when `true`, the inner text of the tag
   * will not be removed
   * Eg. input: Hello <at>my-bot</at>! How are you?
   *     output: Hello my-bot! How are you?
   */
  tagOnly?: boolean;

  /**
   * when `true`, only mentions at the start of the text
   * are removed; mentions later in the text are preserved.
   * Eg. input: <at>my-bot</at> help <at>my-bot</at>
   *     output: help <at>my-bot</at>
   */
  leadingOnly?: boolean;
};

/**
 * remove "\<at>...\</at>" text from an activity
 * @param activity the activity
 */
export function stripMentionsText<TActivity extends TextActivity>(
  activity: TActivity,
  { accountId, tagOnly, leadingOnly }: StripMentionsTextOptions = {}
): TActivity['text'] {
  if (!activity.text) return;

  let text = activity.text;
  const mentions = (activity.entities?.filter((e) => e.type === 'mention') || []).filter(
    (mention) => !accountId || mention.mentioned.id === accountId
  );

  if (leadingOnly) {
    return stripLeadingMentions(text, mentions, tagOnly);
  }

  for (const mention of mentions) {
    const tag = getMentionTag(mention);

    if (!tag) continue;

    text = text.replace(tag, !tagOnly ? '' : getMentionName(tag));
  }

  return text.trim();
}

/**
 * remove matching mentions only while they appear at the start of the text
 */
function stripLeadingMentions(text: string, mentions: MentionEntity[], tagOnly?: boolean) {
  const tags = mentions.map(getMentionTag).filter((tag): tag is string => !!tag);
  let remaining = text.trimStart();
  let stripped = '';

  while (true) {
    const tag = tags.find((t) => remaining.startsWith(t));

    if (!tag) break;

    if (tagOnly) {
      stripped += getMentionName(tag);
      const rest = remaining.slice(tag.length);
      const trimmed = rest.trimStart();
      stripped += rest.slice(0, rest.length - trimmed.length);
      remaining = trimmed;
    } else {
      remaining = remaining.slice(tag.length).trimStart();
    }
  }

  return (stripped + remaining).trim();
}

function getMentionTag(mention: MentionEntity) {
  if (mention.text) return mention.text;
  if (mention.mentioned.name) return `<at>${mention.mentioned.name}</at>`;
  return undefined;
}

function getMentionName(tag: string) {
  return tag.replace('<at>', '').replace('</at>', '');
}
