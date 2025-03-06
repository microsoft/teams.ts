import { IActivity, ActivityBaseBuilder } from './activity';

export interface ITypingActivity extends IActivity<'typing'> {
  /**
   * The text content of the message.
   */
  text?: string;
}

export class TypingActivityBuilder extends ActivityBaseBuilder<ITypingActivity> {
  activity: Pick<ITypingActivity, 'type'> & Partial<ITypingActivity>;

  constructor(options?: Omit<Partial<ITypingActivity>, 'type'>) {
    super();
    this.activity = {
      ...options,
      type: 'typing',
    };
  }

  /**
   * The text content of the message.
   */
  text(value: string) {
    this.activity.text = value;
    return this;
  }
}

export function TypingActivity(options?: Omit<Partial<ITypingActivity>, 'type'>) {
  return new TypingActivityBuilder(options);
}
