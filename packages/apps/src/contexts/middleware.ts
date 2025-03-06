import {
  Activity,
  ActivityLike,
  MentionEntity,
  IMessageActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenResponse,
} from '@microsoft/spark.api';

import { IActivityContext } from './activity';
import { SentActivity, IStreamer } from '../types';

export interface IMiddlewareContext<T extends Activity = Activity> extends IActivityContext<T> {
  /**
   * a stream that can emit activity chunks
   */
  stream: IStreamer;

  /**
   * call the next event/middleware handler
   */
  next: (ctx?: IMiddlewareContext) => any | Promise<any>;

  /**
   * send an activity to the conversation
   * @param activity activity to send
   */
  send: (activity: ActivityLike) => Promise<SentActivity>;

  /**
   * reply to the inbound activity
   * @param activity activity to send
   */
  reply: (activity: ActivityLike) => Promise<SentActivity>;

  /**
   * trigger user signin flow for the activity sender
   * @param name auth connection name, defaults to `graph`
   * @param text card text to display
   */
  signin: (name?: string, text?: string) => Promise<string | undefined>;

  /**
   * sign the activity sender out
   * @param name auth connection name, defaults to `graph`
   */
  signout: (name?: string) => Promise<void>;
}

export interface IMentionMiddlewareContext extends IMiddlewareContext<IMessageActivity> {
  /**
   * the mention entity that references your app
   */
  mention: MentionEntity;
}

export interface ISignInMiddlewareContext
  extends IMiddlewareContext<
    ISignInTokenExchangeInvokeActivity | ISignInVerifyStateInvokeActivity
  > {
  /**
   * the token response of the signin request
   */
  token: TokenResponse;
}

export interface IErrorMiddlewareContext<T extends Activity = Activity>
  extends IMiddlewareContext<T> {
  /**
   * the error
   */
  err: Error;
}
