import { IAdaptiveCard } from '@microsoft/teams.cards';

import type { IMessageActivityInput, ITypingActivityInput } from '../activities';
import type { ActivityParams } from '../clients';

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
