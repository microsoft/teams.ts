export type ClientInfoEntity = {
  readonly type: 'clientInfo';

  /**
   * client locale (ex en-US)
   */
  locale: string;

  /**
   * client country code (ex US)
   */
  country: string;

  /**
   * client platform (ex Web)
   */
  platform: string;

  /**
   * client timezone (ex America/New_York)
   */
  timezone: string;

  /**
   * other properties
   */
  [key: string]: any;
};
