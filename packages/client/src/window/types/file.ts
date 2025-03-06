/**
 * Enum for file formats supported
 */
export type FileFormat = 'base64' | 'id';

/**
 * Enum for file formats supported
 */
export enum FileFormats {
  /** Base64 encoding */
  Base64 = 'base64',

  /** File id */
  ID = 'id',
}

/**
 * File object that can be used to represent image or video or audio
 */
export type File = {
  /**
   * Content of the file. When format is Base64, this is the base64 content
   * When format is ID, this is id mapping to the URI
   * When format is base64 and app needs to use this directly in HTML tags, it should convert this to dataUrl.
   */
  content: string;

  /**
   * Format of the content
   */
  format: FileFormat;

  /**
   * Size of the file in KB
   */
  size: number;

  /**
   * MIME type. This can be used for constructing a dataUrl, if needed.
   */
  mimeType: string;

  /**
   * Optional: Name of the file
   */
  name?: string;
};
