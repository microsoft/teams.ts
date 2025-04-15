import { IconName } from '@microsoft/teams.cards';

/**
 * a custom Page that can be added
 * to the devtools
 */
export type Page = {
  /**
   * an optional icon name
   * to be shown in the view header
   */
  readonly icon?: IconName;

  /**
   * the unique name of the view
   * (must be url safe)
   */
  readonly name: string;

  /**
   * the display name of the view
   * to be shown in the view header
   */
  readonly displayName: string;

  /**
   * the url of the view
   */
  readonly url: string;
};
