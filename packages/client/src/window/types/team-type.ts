/**
 * Indicates the team type, currently used to distinguish between different team
 * types in Office 365 for Education (team types 1, 2, 3, and 4).
 */
export type TeamType = 'standard' | 'edu' | 'class' | 'plc' | 'staff';

/**
 * Indicates the team type, currently used to distinguish between different team
 * types in Office 365 for Education (team types 1, 2, 3, and 4).
 */
export enum TeamTypes {
  /** Represents a standard or classic team in host that is designed for ongoing collaboration and communication among a group of people. */
  Standard = 0,

  /**  Represents an educational team in host that is designed for classroom collaboration and communication among students and teachers. */
  Edu = 1,

  /** Represents a class team in host that is designed for classroom collaboration and communication among students and teachers in a structured environment. */
  Class = 2,

  /** Represents a professional learning community (PLC) team in host that is designed for educators to collaborate and share resources and best practices. */
  Plc = 3,

  /** Represents a staff team in host that is designed for staff collaboration and communication among staff members.*/
  Staff = 4,
}

export function mapTeamType(value: TeamTypes): TeamType {
  return value === TeamTypes.Standard
    ? 'standard'
    : value === TeamTypes.Edu
      ? 'edu'
      : value === TeamTypes.Class
        ? 'class'
        : value === TeamTypes.Plc
          ? 'plc'
          : 'staff';
}
