import { ChannelType } from '../window';

/**
 * Represents Channel information.
 */
export interface ChannelContext {
  /**
   * The Microsoft Teams ID for the channel with which the content is associated.
   */
  id: string;

  /**
   * The name for the channel with which the content is associated.
   */
  displayName?: string;

  /**
   * The relative path to the SharePoint folder associated with the channel.
   */
  relativeUrl?: string;

  /**
   * The type of the channel with which the content is associated.
   */
  membershipType?: ChannelType;

  /**
   * The OneNote section ID that is linked to the channel.
   */
  defaultOneNoteSectionId?: string;

  /**
   * The tenant ID of the team which owns the channel.
   */
  ownerTenantId?: string;

  /**
   * The Microsoft Entra group ID of the team which owns the channel.
   */
  ownerGroupId?: string;
}
