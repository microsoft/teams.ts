import { ITemplate } from '../template';

export class StringTemplate implements ITemplate {
  constructor(readonly src?: string) {}

  render() {
    return this.src || '';
  }
}
