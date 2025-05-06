import { IAdaptiveCard } from '@microsoft/teams.cards';

import { HttpError } from '../error';
import { OAuthCard } from '../oauth';

/**
 * Defines the structure that is returned as the result of an Invoke activity with
 * Name of 'adaptiveCard/action'.
 * https://learn.microsoft.com/en-us/adaptive-cards/authoring-cards/universal-action-model#response-format
 */
export type AdaptiveCardActionResponse =
  | AdaptiveCardActionCardResponse
  | AdaptiveCardActionMessageResponse
  | AdaptiveCardActionErrorResponse
  | AdaptiveCardActionLoginResponse
  | AdaptiveCardActionIncorrectAuthCodeResponse
  | AdaptiveCardActionPreconditionFailedResponse;

/**
 * The request was successfully processed, and the response includes
 * an Adaptive Card that the client should display in place of the current one
 */
export type AdaptiveCardActionCardResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 200;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.card.adaptive';

  /**
   * The card response object.
   */
  value: IAdaptiveCard;
};

/**
 * The request was successfully processed, and the response includes a message that the client should display
 */
export type AdaptiveCardActionMessageResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 200;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.activity.message';

  /**
   * the response message.
   */
  value: string;
};

/**
 * `400`: The incoming request was invalid
 * `500`: An unexpected error occurred
 */
export type AdaptiveCardActionErrorResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 400 | 500;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.error';

  /**
   * The error response object.
   */
  value: HttpError;
};

/**
 * The client needs to prompt the user to authenticate
 */
export type AdaptiveCardActionLoginResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 401;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.activity.loginRequest';

  /**
   * The auth response object.
   */
  value: OAuthCard;
};

/**
 * The authentication state passed by the client was incorrect and authentication failed
 */
export type AdaptiveCardActionIncorrectAuthCodeResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 401;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.error.incorrectAuthCode';

  /**
   * The auth response object.
   */
  value: null;
};

/**
 * The SSO authentication flow failed
 */
export type AdaptiveCardActionPreconditionFailedResponse = {
  /**
   * The Card Action response status code.
   */
  statusCode: 412;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.error.preconditionFailed';

  /**
   * The auth response object.
   */
  value: HttpError;
};
