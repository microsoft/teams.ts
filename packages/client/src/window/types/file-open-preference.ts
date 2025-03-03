/**
 * Allowed user file open preferences
 */
export type FileOpenPreference = 'inline' | 'desktop' | 'web';

/**
 * Allowed user file open preferences
 */
export enum FileOpenPreferences {
  /** Indicates that the user should be prompted to open the file in inline. */
  Inline = 'inline',

  /** Indicates that the user should be prompted to open the file in the native desktop application associated with the file type. */
  Desktop = 'desktop',

  /** Indicates that the user should be prompted to open the file in a web browser. */
  Web = 'web',
}
