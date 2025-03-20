import { Activity, ConversationAccount } from '@microsoft/spark.api';

export interface IEvent<T = any> {
  readonly id: string;
  readonly type: string;
  readonly body: T;
  readonly sentAt: Date;
}

export type ActivityEvent<T extends Activity = Activity> =
  | IActivityReceivedEvent<T>
  | IActivitySendingEvent<T>
  | IActivitySentEvent<T>
  | IActivityErrorEvent<T>;

export interface IActivityReceivedEvent<T extends Activity = Activity> extends IEvent<T> {
  readonly type: 'activity.received';
  readonly chat: ConversationAccount;
}

export interface IActivitySendingEvent<T extends Activity = Activity> extends IEvent<T> {
  readonly type: 'activity.sending';
  readonly chat: ConversationAccount;
}

export interface IActivitySentEvent<T extends Activity = Activity> extends IEvent<T> {
  readonly type: 'activity.sent';
  readonly chat: ConversationAccount;
}

export interface IActivityErrorEvent<T extends Activity = Activity> extends IEvent<T> {
  readonly type: 'activity.error';
  readonly chat: ConversationAccount;
  readonly error?: any;
}
