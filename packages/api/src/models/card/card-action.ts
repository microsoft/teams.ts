export type CardActionType =
  | 'openUrl'
  | 'imBack'
  | 'postBack'
  | 'playAudio'
  | 'playVideo'
  | 'showImage'
  | 'downloadFile'
  | 'signin'
  | 'call'
  | 'invoke'
  /**
   * Controls the cache policy for a link-unfurling response. Set the action value to
   * `{"type":"no-cache"}` to prevent Teams from caching the response.
   */
  | 'setCachePolicy'
  /**
   * Suggested action of type Action.Submit. The action's value is delivered to the bot
   * as a `suggestedActions/submit` invoke without sending a chat-visible message.
   *
   * @experimental This API is in preview and may change in the future.
   */
  | 'Action.Submit';

export type CardAction = {
  /**
   * The type of action implemented by this button. Possible values include: 'openUrl', 'imBack',
   * 'postBack', 'playAudio', 'playVideo', 'showImage', 'downloadFile', 'signin', 'call',
   * 'invoke', 'setCachePolicy', 'Action.Submit'
   */
  type: CardActionType;

  /**
   * Text description which appears on the button
   */
  title: string;

  /**
   * Image URL which will appear on the button, next to text label
   */
  image?: string;

  /**
   * Text for this action
   */
  text?: string;

  /**
   * (Optional) text to display in the chat feed if the button is clicked
   */
  displayText?: string;

  /**
   * Supplementary parameter for action. Content of this property depends on the ActionType
   */
  value: any;

  /**
   * Channel-specific data associated with this action
   */
  channelData?: any;

  /**
   * Alternate image text to be used in place of the `image` field
   */
  imageAltText?: string;
};
