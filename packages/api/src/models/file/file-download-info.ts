/**
 *
 * An interface representing FileDownloadInfo.
 * The content of a `file.download.info` attachment, describing an uploaded file received in a personal (1:1) chat.
 * The file is fetched from the short-lived, pre-authorized `downloadUrl` with a plain GET (no bearer token).
 *
 */
export type FileDownloadInfo = {
  /**
   * @member {string} [downloadUrl] Pre-authorized, short-lived URL the file can be fetched from with a plain GET (no bearer token).
   */
  downloadUrl?: string;

  /**
   * @member {string} [uniqueId] The ODSP/OneDrive identifier for the file. Useful for correlation, dedup and logging, but not for retrieval: a Graph fetch resolves bytes from the attachment's `contentUrl` through `/shares`, and this value arrives as a GUID, which is a SharePoint `listItemUniqueId` shape rather than a Graph `driveItem.id`.
   */
  uniqueId?: string;

  /**
   * @member {string} [fileType] Type of file (extension, e.g. `pdf`, `docx`).
   */
  fileType?: string;

  /**
   * @member {string} [etag] A server-assigned version tag identifying this version of the file's contents, for detecting whether the file changed between reads.
   * Read-only; populated when Teams provides it with the file.
   */
  etag?: string;
};
