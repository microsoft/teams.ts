import { AgenticIdentity } from './agentic-identity';
import { MembershipSource } from './membership-source';
import { Role } from './role';

export type Account<P = any> = {
  readonly id: string;
  readonly aadObjectId?: string;
  readonly role: Role;
  /**
   * The type of the account. Possible values: 'person', 'bot', 'channel', 'team', 'tag'.
   * Primarily present on mention entities for non-person accounts. Absent for regular person accounts.
   */
  readonly type?: string;
  readonly name?: string;
  /**
   * Email address for the account when the channel includes it. This is optional
   * because many inbound activities omit email addresses.
   */
  readonly email?: string;
  /**
   * User role metadata for the account when the channel includes it. This is
   * optional and should not be used for authorization decisions unless the
   * channel explicitly documents the value.
   */
  readonly userRole?: string;
  readonly properties?: P;
  readonly membershipSources?: MembershipSource[];

  /**
   * Indicates if this account is the target of a targeted message.
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsTargeted
   */
  isTargeted?: boolean;

  /**
   * Entra object ID of the user-backed agentic identity represented by this
   * account, when present.
   *
   * This and the two fields below are activity wire fields, so they keep the
   * service-owned JSON keys.
   */
  readonly agenticUserId?: string;
  /**
   * ID of the agentic app represented by this account.
   */
  readonly agenticAppId?: string;
  /**
   * ID of the Agentic App Blueprint backing the agentic app.
   */
  readonly agenticAppBlueprintId?: string;
  readonly callbackUri?: string;
  readonly tenantId?: string;
};

/**
 * Builds an agentic identity from an account when the activity recipient
 * carries the fields required for scoped auth.
 */
export function getAgenticIdentity(account?: Account): AgenticIdentity | undefined {
  if (!account?.agenticAppId || !account.agenticUserId) {
    return undefined;
  }

  return {
  agenticAppId: account.agenticAppId,
    agenticUserId: account.agenticUserId,
    tenantId: account.tenantId,
  agenticAppBlueprintId: account.agenticAppBlueprintId,
  };
}

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
   * @member {string} [aadObjectId] The user's Object ID in Azure Active Directory (AAD).
   */
  readonly aadObjectId?: string;

  /**
   * @member {string} [userRole] Role of the user in the conversation.
   */
  readonly userRole?: string;

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

/**
 * The backend inconsistently populates either `objectId` or `aadObjectId` depending on the endpoint:
 * - `GET /v3/conversations/{id}/members` (non-paginated) → `objectId`
 * - `GET /v3/conversations/{id}/members/{memberId}`       → `aadObjectId`
 * - `GET /v3/conversations/{id}/pagedMembers`             → `aadObjectId`
 * - `GET /v3/conversations/{id}/activities/{id}/members`  → `objectId`
 *
 * This function normalizes both into `aadObjectId`.
 */
export function resolveAadObjectId(data: any): TeamsChannelAccount {
  return {
    ...data,
    aadObjectId: data.aadObjectId ?? data.objectId,
  };
}

export type ConversationAccount = {
  readonly id: string;
  readonly tenantId?: string;
  readonly conversationType: 'personal' | 'groupChat' | Omit<string, 'personal' | 'groupChat'>;
  readonly name?: string;
  readonly isGroup?: boolean;
};
