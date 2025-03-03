/**
 * @interface
 * An interface representing MessageActionsPayloadApp.
 * Represents an application entity.
 *
 */
export interface MessageApp {
  /**
   * @member {ApplicationIdentityType} [applicationIdentityType] The type of
   * application. Possible values include: 'aadApplication', 'bot',
   * 'tenantBot', 'office365Connector', 'webhook'
   */
  applicationIdentityType?:
    | 'aadApplication'
    | 'bot'
    | 'tenantBot'
    | 'office365Connector'
    | 'webhook';

  /**
   * @member {string} [id] The id of the application.
   */
  id: string;

  /**
   * @member {string} [displayName] The plaintext display name of the
   * application.
   */
  displayName?: string;
}
