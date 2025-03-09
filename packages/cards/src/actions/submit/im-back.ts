export interface IIMBackData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;
}

export class IMBackData implements IIMBackData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;

  constructor(value: string) {
    this.type = 'imBack';
    this.value = value;
  }
}
