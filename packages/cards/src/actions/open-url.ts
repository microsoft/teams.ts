import { IAction, Action } from './base';

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export interface IOpenUrlAction extends IAction {
  type: 'Action.OpenUrl';

  /**
   * The URL to open.
   */
  url: string;
}

export type OpenUrlActionOptions = Omit<IOpenUrlAction, 'type' | 'url'>;

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export class OpenUrlAction extends Action implements IOpenUrlAction {
  type: 'Action.OpenUrl';

  /**
   * The URL to open.
   */
  url: string;

  constructor(url: string, options: OpenUrlActionOptions = {}) {
    super();
    this.type = 'Action.OpenUrl';
    this.url = url;
    this.withOptions(options);
  }

  withOptions(value: OpenUrlActionOptions) {
    Object.assign(this, value);
    return this;
  }

  withUrl(value: string) {
    this.url = value;
    return this;
  }
}
