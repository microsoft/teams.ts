import {
  AdaptiveCardActionResponse,
  ConfigResponse,
  MessagingExtensionActionResponse,
  MessagingExtensionResponse,
  TabResponse,
  TaskModuleResponse,
  TokenExchangeInvokeResponse,
} from '../models';

/**
 * Represents a response returned by a bot when it receives an `invoke` activity.
 *
 * This interface supports the framework and is not intended to be called directly for your code.
 */
export type InvokeResponse<T extends keyof InvokeResponseBody = any> = {
  /**
   * The HTTP status code of the response.
   */
  status: number;

  /**
   * Optional. The body of the response.
   */
  body?: InvokeResponseBody[T];
};

/**
 * @hidden
 * @internal
 *
 * Type guard to check if a value is an InvokeResponse.
 * @param value value to compare
 * @returns true if value is type of InvokeResponse
 */
export function isInvokeResponse(value: any): value is InvokeResponse {
  return typeof value === 'object' && 'status' in value && typeof value.status === 'number';
}

type InvokeResponseBody = {
  'config/fetch': ConfigResponse;
  'config/submit': ConfigResponse;
  'fileConsent/invoke': void;
  'actionableMessage/executeAction': void;
  'composeExtension/queryLink': MessagingExtensionResponse;
  'composeExtension/anonymousQueryLink': MessagingExtensionResponse;
  'composeExtension/query': MessagingExtensionResponse;
  'composeExtension/selectItem': MessagingExtensionResponse;
  'composeExtension/submitAction': MessagingExtensionActionResponse;
  'composeExtension/fetchTask': MessagingExtensionActionResponse;
  'composeExtension/querySettingUrl': MessagingExtensionResponse;
  'composeExtension/setting': MessagingExtensionResponse;
  'composeExtension/onCardButtonClicked': void;
  'task/fetch': TaskModuleResponse;
  'task/submit': TaskModuleResponse;
  'tab/fetch': TabResponse;
  'tab/submit': TabResponse;
  'message/submitAction': void;
  'handoff/action': void;
  'signin/tokenExchange': TokenExchangeInvokeResponse | void;
  'signin/verifyState': void;
  'signin/failure': void;
  'adaptiveCard/action': AdaptiveCardActionResponse;
};
