import { Template } from '../template';

export class StringTemplate implements Template {
  constructor(readonly src?: string) {}

  render() {
    return this.src || '';
  }
}
