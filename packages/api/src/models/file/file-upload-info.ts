/**
 *
 * An interface representing FileUploadInfo.
 * Information about the file to be uploaded.
 *
 */
export type FileUploadInfo = {
  /**
   * @member {string} [name] Name of the file.
   */
  name?: string;

  /**
   * @member {string} [uploadUrl] URL to an upload session that the bot can use
   * to set the file contents.
   */
  uploadUrl?: string;

  /**
   * @member {string} [contentUrl] URL to file.
   */
  contentUrl?: string;

  /**
   * @member {string} [uniqueId] ID that uniquely identifies the file.
   */
  uniqueId?: string;

  /**
   * @member {string} [fileType] Type of the file.
   */
  fileType?: string;
};
