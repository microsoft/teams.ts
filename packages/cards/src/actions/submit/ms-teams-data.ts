/**
 * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
 */
export type MSTeamsData<T> = {
  /**
   * Teams specific payload data.
   */
  msteams: T;

  /**
   * Other
   */
  [key: string]: any;
};
