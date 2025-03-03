import { TokenExchangeInvokeRequest } from '../token-exchange';

/**
 * Defines the structure that arrives in the Activity.Value.Authentication for Invoke
 * activity with Name of 'adaptiveCard/action'.
 */
export interface AdaptiveCardAuthentication extends TokenExchangeInvokeRequest {
  // No-op. This interface was accidentally created as a duplicate of TokenExchangeInvokeRequest but must remain for backwards-compatibility.
}
