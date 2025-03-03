import { ChannelInfo } from './channel-info';

/**
 * @interface
 * Settings within teams channel data specific to messages received in Microsoft Teams.
 */
export interface ChannelDataSettings {
  /**
   * @member {ChannelInfo} [selectedChannel] Information about the selected Teams channel.
   */
  selectedChannel: ChannelInfo;

  /**
   * @member {any} [any] Additional properties that are not otherwise defined by the TeamsChannelDataSettings
   * type but that might appear in the REST JSON object.
   * @remarks With this, properties not represented in the defined type are not dropped when
   * the JSON object is deserialized, but are instead stored in this property. Such properties
   * will be written to a JSON object when the instance is serialized.
   */
  [properties: string]: unknown;
}
