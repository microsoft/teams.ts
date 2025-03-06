import { DialogDimension } from './dialog-dimension';

export type DialogSize = {
  /**
   * The requested height of the webview/iframe.
   */
  height?: DialogDimension | number;

  /**
   * The requested width of the webview/iframe.
   */
  width?: DialogDimension | number;
};
