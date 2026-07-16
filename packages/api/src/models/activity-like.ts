import { IAdaptiveCard } from '@microsoft/teams.cards';

import type { IMessageActivityInput, ITypingActivityInput, MessageActivity, TypingActivity } from '../activities';
import type { ActivityParams } from '../clients';

/**
 * Legacy full activity builders that are still accepted as send input while callers
 * migrate to the outbound input builders.
 *
 * @deprecated Use {@link IMessageActivityInput} or {@link ITypingActivityInput} instead.
 */
export type DeprecatedInputActivity = MessageActivity | TypingActivity;

/**
 * represents anything that can be transformed
 * into an activity in an automated way.
 *
 * The structured-activity portion is narrowed to message/typing inputs rather than
 * "any partial activity", so `send()`/`reply()`/`quote()` only accept what the app can send.
 */
export type ActivityLike = IMessageActivityInput | ITypingActivityInput | string | IAdaptiveCard;

/**
 * represents an activity that was sent
 */
export type SentActivity = { id: string } & ActivityParams;
