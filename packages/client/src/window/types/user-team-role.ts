/**
 * Indicates the various types of roles of a user in a team.
 */
export type UserTeamRole = 'admin' | 'user' | 'guest';

/**
 * Indicates the various types of roles of a user in a team.
 */
export enum UserTeamRoles {
  /** Represents that the user is an owner or administrator of the team. */
  Admin = 0,

  /** Represents that the user is a standard member of the team. */
  User = 1,

  /** Represents that the user does not have any role in the team. */
  Guest = 2,
}

export function mapUserTeamRole(value: UserTeamRoles): UserTeamRole {
  return value === UserTeamRoles.Admin ? 'admin' : value === UserTeamRoles.User ? 'user' : 'guest';
}
