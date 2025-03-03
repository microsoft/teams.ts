import { TabEntityContext } from '../tab';

/**
 * @interface
 * An interface representing TaskModuleRequest.
 * Task module invoke request value payload
 *
 */
export interface TaskModuleRequest {
  /**
   * @member {any} [data] User input data. Free payload with key-value pairs.
   */
  data?: any;

  /**
   * @member {TaskModuleRequestContext} [context] Current user context, i.e.,
   * the current theme
   */
  context?: TaskModuleRequestContext;

  /**
   * @member {TabEntityContext} [tabContext] Tab request context.
   */
  tabContext?: TabEntityContext;
}

/**
 * @interface
 * An interface representing TaskModuleRequestContext.
 * Current user context, i.e., the current theme
 *
 */
export interface TaskModuleRequestContext {
  /**
   * @member {string} [theme]
   */
  theme?: string;
}
