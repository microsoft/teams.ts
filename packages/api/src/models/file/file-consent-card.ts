import { Action } from '../action';

import { FileUploadInfo } from './file-upload-info';

/**
 * @interface
 * An interface representing FileConsentCard.
 * File consent card attachment.
 *
 */
export interface FileConsentCard {
  /**
   * @member {string} [description] File description.
   */
  description?: string;

  /**
   * @member {number} [sizeInBytes] Size of the file to be uploaded in Bytes.
   */
  sizeInBytes?: number;

  /**
   * @member {any} [acceptContext] Context sent back to the Bot if user
   * consented to upload. This is free flow schema and is sent back in Value
   * field of Activity.
   */
  acceptContext?: any;

  /**
   * @member {any} [declineContext] Context sent back to the Bot if user
   * declined. This is free flow schema and is sent back in Value field of
   * Activity.
   */
  declineContext?: any;
}

/**
 * @interface
 * An interface representing FileConsentCardResponse.
 * Represents the value of the invoke activity sent when the user acts on a
 * file consent card
 *
 */
export interface FileConsentCardResponse {
  /**
   * @member {Action} [action] The action the user took. Possible values
   * include: 'accept', 'decline'
   */
  action: Action;

  /**
   * @member {any} [context] The context associated with the action.
   */
  context?: any;

  /**
   * @member {FileUploadInfo} [uploadInfo] If the user accepted the file,
   * contains information about the file to be uploaded.
   */
  uploadInfo?: FileUploadInfo;
}
