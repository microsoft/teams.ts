/**
 *
 * An interface representing O365ConnectorCardActionQuery.
 * O365 connector card HttpPOST invoke query
 *
 */
export type O365ConnectorCardActionQuery = {
  /**
   * @member {string} [body] The results of body string defined in
   * IO365ConnectorCardHttpPOST with substituted input values
   */
  body?: string;

  /**
   * @member {string} [actionId] Action Id associated with the HttpPOST action
   * button triggered, defined in O365ConnectorCardActionBase.
   */
  actionId?: string;
};
