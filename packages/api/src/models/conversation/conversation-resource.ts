/**
 * A response containing a resource
 */
export type ConversationResource = {
  /**
   * Id of the resource
   */
  id: string;

  /**
   * ID of the Activity (if sent)
   */
  activityId: string;

  /**
   * Service endpoint where operations concerning the conversation may be performed
   */
  serviceUrl: string;
};
