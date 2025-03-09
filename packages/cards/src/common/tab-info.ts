/**
 * Information about the content to embed in an iFrame.
 */
export interface ITabInfo {
  /**
   * The URL to open in an iFrame.
   */
  contentUrl: string;

  /**
   * Optional. Website URL to the content, allowing users to open this content in the browser (if they prefer).
   */
  websiteUrl?: string;

  /**
   * Name for the content. This will be displayed as the title of the window hosting the iFrame.
   */
  name: string;

  /**
   * Unique entity id for this content (e.g., random UUID).
   */
  entityId: string;
}
