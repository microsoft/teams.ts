import { BaseAction } from './base';

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export interface OpenUrlAction extends BaseAction {
  type: 'Action.OpenUrl';

  /**
   * The URL to open.
   */
  url: string;
}

export type OpenUrlActionParams = Omit<OpenUrlAction, 'type' | 'url'>;

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export function OpenUrlAction(url: string, params?: OpenUrlActionParams): OpenUrlAction {
  return {
    type: 'Action.OpenUrl',
    url,
    ...params,
  };
}
