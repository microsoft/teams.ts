import type { IMemory } from './memory';
import type { Message } from './message';
import type { IChatModel } from './models';

export type LocalMemoryOptions = {
  readonly max?: number;
  readonly messages?: Message[];
  readonly collapse?: {
    readonly strategy: 'half' | 'full';
    readonly model: IChatModel;
  };
};

export class LocalMemory implements IMemory {
  protected readonly messages: Message[];
  protected readonly options: LocalMemoryOptions;

  constructor(options?: LocalMemoryOptions) {
    this.messages = options?.messages || [];
    this.options = options || {};
  }

  get(i: number): Message | undefined {
    if (i < 0 || i > this.messages.length - 1) return;
    return this.messages[i];
  }

  set(i: number, message: Message): void {
    if (i < 0 || i > this.messages.length - 1) return;
    this.messages[i] = message;
  }

  delete(i: number): void {
    if (i < 0 || i > this.messages.length - 1) return;
    this.messages.splice(i, 1);
  }

  async push(message: Message): Promise<void> {
    this.messages.push(message);
    let len = this.length();

    if (len === (this.options.max || 100)) {
      await this.collapse();
      len = this.length();
    }

    while (
      len > (this.options.max || 100) ||
      (this.messages[0].role === 'model' && this.messages[0].function_calls?.length) ||
      this.messages[0].role === 'function'
    ) {
      const removed = this.pop();

      if (!removed) break;

      len = this.length();

      if (len === 0) break;
    }
  }

  pop(): Message | undefined {
    return this.messages.shift();
  }

  values(): Message[] {
    return this.messages.slice();
  }

  length(): number {
    return this.messages.length;
  }

  where(predicate: (value: Message, index: number) => boolean): Message[] {
    return this.messages.filter(predicate);
  }

  async collapse(): Promise<Message | undefined> {
    if (!this.options.collapse) return;

    const start = 0;
    let end = this.length() - 1;

    if (this.options.collapse.strategy === 'half') {
      end = Math.floor(this.length() / 2) - 1;
    }

    let last = this.messages[end];

    while ((last.role === 'model' && last.function_calls?.length) || last.role === 'function') {
      end++;
      last = this.messages[end];
    }

    const res = await this.options.collapse.model.send(
      {
        role: 'user',
        content: 'summarize this conversation',
      },
      {
        messages: new LocalMemory({
          messages: this.messages.slice(start, end + 1),
        }),
      }
    );

    this.messages.splice(start, end - start, res);
    return res;
  }
}
