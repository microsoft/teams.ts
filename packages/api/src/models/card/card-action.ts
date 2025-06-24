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
  | 'invoke';

export type CardAction = {
  /**
   * The type of action implemented by this button. Possible values include: 'openUrl', 'imBack',
   * 'postBack', 'playAudio', 'playVideo', 'showImage', 'downloadFile', 'signin', 'call',
   * messageBack', 'openApp', 'invoke'
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
