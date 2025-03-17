import { Page } from './Page';

export interface Metadata {
  /**
   * the apps id
   */
  readonly id?: string;

  /**
   * the apps name
   */
  readonly name?: string;

  /**
   * the plugins custom pages
   */
  readonly pages: Array<Page>;
}
