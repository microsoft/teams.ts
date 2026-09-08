/**
 *
 * An interface representing FileInfoCard.
 * File info card.
 *
 */
export type FileInfoCard = {
  /**
   * @member {string} [uniqueId] Unique Id for the file.
   */
  uniqueId?: string;

  /**
   * @member {string} [fileType] Type of file.
   */
  fileType?: string;

  /**
   * @member {string} [etag] A server-assigned version tag identifying the uploaded file's contents.
   * Populated from the storage service's upload response.
   */
  etag?: string;
};
