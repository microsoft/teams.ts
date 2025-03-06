/**
 * Data struture to represent the location information
 */
export type Location = {
  /**
   * Latitude of the location
   */
  latitude: number;

  /**
   * Longitude of the location
   */
  longitude: number;

  /**
   * Accuracy describes the maximum distance in meters from the captured coordinates to the possible actual location
   * @remarks
   * This property is only in scope for mobile
   */
  accuracy?: number;

  /**
   * Time stamp when the location was captured
   */
  timestamp?: number;
};
