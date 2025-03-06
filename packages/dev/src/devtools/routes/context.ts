import { Activity, InvokeResponse, IToken } from '@microsoft/spark.api';
import { ILogger } from '@microsoft/spark.common/logging';

export type RouteContext = {
  readonly port: number;
  readonly log: ILogger;
  readonly process: (token: IToken, activity: Activity) => Promise<InvokeResponse>;
};
