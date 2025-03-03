import { Activity, ConversationAccount } from '@microsoft/spark.api';

export interface Event<T = any> {
  readonly id: string;
  readonly type: string;
  readonly body: T;
  readonly sentAt: Date;
}

export type ActivityEvent<T extends Activity = Activity> =
  | ActivityReceivedEvent<T>
  | ActivitySendingEvent<T>
  | ActivitySentEvent<T>
  | ActivityErrorEvent<T>;

export interface ActivityReceivedEvent<T extends Activity = Activity> extends Event<T> {
  readonly type: 'activity.received';
  readonly chat: ConversationAccount;
}

export interface ActivitySendingEvent<T extends Activity = Activity> extends Event<T> {
  readonly type: 'activity.sending';
  readonly chat: ConversationAccount;
}

export interface ActivitySentEvent<T extends Activity = Activity> extends Event<T> {
  readonly type: 'activity.sent';
  readonly chat: ConversationAccount;
}

export interface ActivityErrorEvent<T extends Activity = Activity> extends Event<T> {
  readonly type: 'activity.error';
  readonly chat: ConversationAccount;
  readonly error?: any;
}
