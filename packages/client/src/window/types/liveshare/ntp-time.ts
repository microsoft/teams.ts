/**
 * pecify the global timestamp for the current
 * Live Share session.
 */
export type NtpTime = {
  /**
   * ISO 8601 formatted server time. For example: '2019-09-07T15:50-04:00'
   */
  ntpTime: string;

  /**
   * Server time expressed as the number of milliseconds since the ECMAScript epoch.
   */
  ntpTimeInUTC: number;
};
