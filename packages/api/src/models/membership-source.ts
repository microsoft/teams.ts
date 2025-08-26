import { MembershipSourceTypes } from './membership-source-types';
import { MembershipTypes } from './membership-types';

/**
 * Interface representing a membership source.
 */
export type MembershipSource = {
  /**
   * The type of roster the user is a member of.
   */
  sourceType: MembershipSourceTypes;

  /**
   * The unique identifier of the membership source.
   */
  id: string

  /**
   * The users relationship to the current channel.
   */
  membershipType: MembershipTypes;

  /**
   * The group ID of the team associated with this membership source.
   */
  teamGroupId: string

  /**
   * The tenant ID for the user.
   */
  tenantId: string
};
