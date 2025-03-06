import { Activity, InvokeResponse, IToken } from '@microsoft/spark.api';
import { Logger } from '@microsoft/spark.common/logging';

export interface RouteContext {
  readonly port: number;
  readonly log: Logger;
  readonly process: (token: IToken, activity: Activity) => Promise<InvokeResponse>;
}
