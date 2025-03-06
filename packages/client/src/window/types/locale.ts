import { HostClientType } from './host';

/**
 * Represents OS locale info used for formatting date and time data
 */
export type Locale = {
  /**
   * Represents the user's platform on which the app is running.
   */
  platform: HostClientType | 'windows';

  /**
   * Represents the regional format used by the user's locale.
   * @example `en-us`.
   */
  regionalFormat: string;

  /**
   * Displays date values, as specified by the short date format MM/DD/YYYY in user's regional settings.
   * @example 4/21/2023 or 4-21-2023
   */
  shortDate: string;

  /**
   * Displays only date values, as specified by the Long Date format in user's regional settings.
   * @example Friday, April 21, 2023
   */
  longDate: string;

  /**
   * A string representing the short time format used by the user's locale.
   * @example 10:10
   */
  shortTime: string;

  /**
   * A string representing the long time format used by the user's locale.
   * @example 10:10:42 AM
   */
  longTime: string;
};
