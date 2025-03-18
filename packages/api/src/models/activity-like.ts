import { ICard } from '@microsoft/spark.cards';

import { ActivityParams } from '../clients';

/**
 * represents anything that can be transformed
 * into an activity in an automated way
 */
export type ActivityLike = ActivityParams | string | ICard;

/**
 * represents an activity that was sent
 */
export type SentActivity = { id: string } & ActivityParams;
