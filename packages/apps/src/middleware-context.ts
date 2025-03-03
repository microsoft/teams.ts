import {
  Activity,
  ActivityLike,
  MentionEntity,
  MessageSendActivity,
  SignInTokenExchangeInvokeActivity,
  SignInVerifyStateInvokeActivity,
  TokenResponse,
} from '@microsoft/spark.api';

import { ActivityContext } from './activity-context';
import { SentActivity, Streamer } from './types';

export interface MiddlewareContext<T extends Activity = Activity> extends ActivityContext<T> {
  /**
   * a stream that can emit activity chunks
   */
  stream: Streamer;

  /**
   * call the next event/middleware handler
   */
  next: (ctx?: MiddlewareContext) => any | Promise<any>;

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

export interface MentionMiddlewareContext extends MiddlewareContext<MessageSendActivity> {
  /**
   * the mention entity that references your app
   */
  mention: MentionEntity;
}

export interface SignInMiddlewareContext
  extends MiddlewareContext<SignInTokenExchangeInvokeActivity | SignInVerifyStateInvokeActivity> {
  /**
   * the token response of the signin request
   */
  token: TokenResponse;
}

export interface ErrorMiddlewareContext<T extends Activity = Activity>
  extends MiddlewareContext<T> {
  /**
   * the error
   */
  err: Error;
}
