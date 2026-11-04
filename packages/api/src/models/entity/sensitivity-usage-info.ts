/**
 * Microsoft Purview sensitivity label information.
 * Used both as the message-level label on the root message entity and as a citation's `usageInfo`.
 */
export type SensitivityUsageInfo = {
  /**
   * The schema.org type.
   * Defaults to 'CreativeWork' when omitted.
   */
  '@type'?: string;

  /**
   * The Purview sensitivity label ID.
   * Teams resolves the label's display name and description from this ID.
   */
  '@id': string;

  /**
   * Display name of the label.
   * Used as a fallback when Teams cannot resolve `@id`.
   */
  name?: string;

  /**
   * Description of the label.
   */
  description?: string;

  /**
   * Priority of the label, used to pick the most restrictive label.
   * Applies to the message-level label and requires `@id`.
   */
  position?: number;
};
