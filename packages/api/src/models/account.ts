import { MembershipSource } from './membership-source';
import { Role } from './role';

export type Account<P = any> = {
  readonly id: string;
  readonly aadObjectId?: string;
  readonly role: Role;
  readonly name: string;
  readonly properties?: P;
  readonly membershipSources?: MembershipSource[];
};

/**
 * Represents a Teams channel account, extending the basic channel account with Teams-specific properties.
 * This is used to represent a user or bot in Microsoft Teams conversations.
 * @see https://learn.microsoft.com/en-us/dotnet/api/microsoft.bot.schema.teams.teamschannelaccount
 */
export type TeamsChannelAccount<P = any> = {
  /**
   * @member {string} [id] Unique identifier for the user or bot in the channel.
   */
  readonly id: string;

  /**
   * @member {string} [name] Display-friendly name of the user or bot.
   */
  readonly name: string;

  /**
   * @member {string} [objectId] The user's Object ID in Azure Active Directory (AAD).
   */
  readonly objectId?: string;

  /**
   * @member {Role} [userRole] Role of the user (e.g., 'user' or 'bot').
   */
  readonly userRole: Role;

  /**
   * @member {string} [givenName] Given name (first name) of the user.
   */
  readonly givenName?: string;

  /**
   * @member {string} [surname] Surname (last name) of the user.
   */
  readonly surname?: string;

  /**
   * @member {string} [email] Email address of the user.
   */
  readonly email?: string;

  /**
   * @member {string} [userPrincipalName] Unique User Principal Name (UPN) for the user in AAD.
   */
  readonly userPrincipalName?: string;

  /**
   * @member {string} [tenantId] Unique identifier for the user's Azure AD tenant.
   */
  readonly tenantId?: string;

  /**
   * @member {P} [properties] Custom properties associated with the account.
   */
  readonly properties?: P;
};

export type ConversationAccount = {
  readonly id: string;
  readonly tenantId?: string;
  readonly conversationType: 'personal' | 'groupChat' | Omit<string, 'personal' | 'groupChat'>;
  readonly name?: string;
  readonly isGroup?: boolean;
};
