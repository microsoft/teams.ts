/**
 *
 * An interface representing TeamInfo.
 * Describes a team
 *
 */
export type TeamInfo = {
  /**
   * @member {string} [id] Unique identifier representing a team
   */
  id: string;

  /**
   * @member {string} [name] Name of team.
   */
  name?: string;

  /**
   * @member {string} [aadGroupId] The Azure AD Teams group ID.
   */
  aadGroupId?: string;

  /**
   * @member {string} [type] The tenant ID of the team.
   */
  tenantId?: string;
};
