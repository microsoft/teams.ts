export type Attachment = {
  /**
   * @member {string} [id] The id of the attachment.
   * @deprecated No longer returned by the service backend.
   */
  id?: string;

  /**
   * mimetype/Contenttype for the file
   */
  contentType: string;

  /**
   * Content Url
   */
  contentUrl?: string;

  /**
   * Embedded content
   */
  content?: any;

  /**
   * (OPTIONAL) The name of the attachment
   */
  name?: string;

  /**
   * (OPTIONAL) Thumbnail associated with attachment
   */
  thumbnailUrl?: string;
};
