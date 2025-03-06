/**
 *
 * An interface representing TeamDetails.
 * Details related to a team
 */
export type TeamDetails = {
  /**
   * @member {string} [id] Unique identifier representing a team
   */
  id: string;

  /**
   * @member {string} [name] Name of team.
   */
  name?: string;

  /**
   * @member {string} [type] The type of the team. Valid values are standard, sharedChannel and privateChannel.
   */
  type: 'standard' | 'sharedChannel' | 'privateChannel';

  /**
   * @member {string} [aadGroupId] Azure Active Directory (AAD) Group Id for
   * the team.
   */
  aadGroupId?: string;

  /**
   * @member {number} [channelCount] Count of channels in the team.
   */
  channelCount?: number;

  /**
   * @member {number} [memberCount] Count of members in the team.
   * the team.
   */
  memberCount?: number;
};
