import { TabContext } from './tab-context';
import { TabEntityContext } from './tab-entity-context';

/**
 * @interface
 * Invoke ('tab/fetch') request value payload.
 *
 */
export interface TabRequest {
  /**
   * @member {TabEntityContext} [tabContext] The current tab entity request context.
   */
  tabContext?: TabEntityContext;

  /**
   * @member {TabContext} [context] The current user context, i.e., the current theme.
   */
  context?: TabContext;

  /**
   * @member {string} [state] The magic code for OAuth flow.
   */
  state?: string;
}
