import { Activity, InvokeResponse, IToken } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common/logging';

export type RouteContext = {
  readonly port: number;
  readonly log: ILogger;
  readonly process: (token: IToken, activity: Activity) => Promise<InvokeResponse>;
};
