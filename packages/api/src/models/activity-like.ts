import { Card } from '@microsoft/spark.cards';

import { ActivityBuilder } from '../activities';
import { ActivityParams } from '../clients';

export type ActivityLike = ActivityParams | string | ActivityBuilder | Card;
