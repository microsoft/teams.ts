export type Attachment = {
  /**
   * @member {string} [id] The id of the attachment.
   * @deprecated This will be removed by end of summer 2026.
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
