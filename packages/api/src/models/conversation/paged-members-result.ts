import { TeamsChannelAccount } from '../account';

/**
 * Result of a paged members request.
 */
export type PagedMembersResult = {
  /**
   * The members in this page.
   */
  members: TeamsChannelAccount[];

  /**
   * Token to fetch the next page of members. Absent if this is the last page.
   */
  continuationToken?: string;
};
