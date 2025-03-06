import { TeamType, UserTeamRole } from '../window';

/**
 * Represents Team information.
 */
export type TeamContext = {
  /**
   * The Microsoft Teams ID for the team with which the content is associated.
   */
  internalId: string;

  /**
   * The name for the team with which the content is associated.
   */
  displayName?: string;

  /**
   * The type of the team.
   */
  type?: TeamType;

  /**
   * The Office 365 group ID for the team with which the content is associated.
   * This field is available only when the identity permission is requested in the manifest.
   */
  groupId?: string;

  /**
   * Indicates whether team is archived.
   * Apps should use this as a signal to prevent any changes to content associated with archived teams.
   */
  isArchived?: boolean;

  /**
   * Team Template ID if there was a Team Template associated with the creation of the team.
   */
  templateId?: string;

  /**
   * The user's role in the team.
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a hint as to the user's role, and never as proof of her role.
   */
  userRole?: UserTeamRole;
};
