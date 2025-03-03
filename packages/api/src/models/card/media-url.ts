/**
 * Media URL
 */
export interface MediaUrl {
  /**
   * Url for the media
   */
  url: string;

  /**
   * Optional profile hint to the client to differentiate multiple MediaUrl objects from each other
   */
  profile?: string;
}
