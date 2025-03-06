/**
 * Data structure to customize the barcode scanning experience in scanBarCode API.
 * All properties in BarCodeConfig are optional and have default values in the platform
 */
export type BarCodeConfig = {
  /**
   * Optional; designates the scan timeout interval in seconds.
   * Default value is 30 seconds, max allowed value is 60 seconds.
   */
  timeOutIntervalInSec?: number;
};
