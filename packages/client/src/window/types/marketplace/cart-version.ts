/**
 * Version of the cart that is used by the app.
 */
export interface CartVersion {
  /**
   * Represents the major version of a cart, it
   * not compatible with the previous major version.
   */
  readonly majorVersion: number;

  /**
   * The minor version of a cart, which is compatible
   * with the previous minor version in the same major version.
   */
  readonly minorVersion: number;
}
