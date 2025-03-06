import { TokenExchangeInvokeRequest } from '../token-exchange';

/**
 * Defines the structure that arrives in the Activity.Value.Authentication for Invoke
 * activity with Name of 'adaptiveCard/action'.
 */
export type AdaptiveCardAuthentication = TokenExchangeInvokeRequest;
