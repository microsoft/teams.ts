import type { ITemplate } from '../template';

export class StringTemplate implements ITemplate {
  constructor(readonly src?: string) {}

  render(): string {
    return this.src || '';
  }
}
