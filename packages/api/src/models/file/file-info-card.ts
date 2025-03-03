/**
 * @interface
 * An interface representing FileInfoCard.
 * File info card.
 *
 */
export interface FileInfoCard {
  /**
   * @member {string} [uniqueId] Unique Id for the file.
   */
  uniqueId?: string;

  /**
   * @member {string} [fileType] Type of file.
   */
  fileType?: string;

  /**
   * @member {any} [etag] ETag for the file.
   */
  etag?: any;
}
