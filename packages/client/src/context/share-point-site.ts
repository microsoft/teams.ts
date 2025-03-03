/**
 * Represents information about a SharePoint site
 */
export interface SharePointSiteContext {
  /**
   * The root SharePoint site associated with the team.
   */
  teamSiteUrl?: string;

  /**
   * The domain of the root SharePoint site associated with the team.
   */
  teamSiteDomain?: string;

  /**
   * The relative path to the SharePoint site associated with the team.
   */
  teamSitePath?: string;

  /**
   * Teamsite ID, aka sharepoint site id.
   */
  teamSiteId?: string;

  /**
   * The SharePoint my site domain associated with the user.
   */
  mySiteDomain?: string;

  /**
   * The SharePoint relative path to the current users mysite
   */
  mySitePath?: string;
}
