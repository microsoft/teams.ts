/**
 * Represents information about a user on behalf of whom an action is performed.
 */
export type OnBehalfOf = {
  /**
   * The ID of the item.
   */
  itemid: 0 | number;
  
  /**
   * The type of mention.
   */
  mentionType: 'person' | string;
  
  /**
   * The Microsoft Resource Identifier (MRI) of the user.
   */
  mri: string;

  /**
   * The display name of the user.
   */
  displayName?: string;
};
