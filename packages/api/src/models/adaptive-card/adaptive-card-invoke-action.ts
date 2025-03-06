/**
 * Defines the structure that arrives in the Activity.Value.Action for Invoke
 * activity with Name of 'adaptiveCard/action'.
 */
export type AdaptiveCardInvokeAction = {
  /**
   * The Type of this Adaptive Card Invoke Action.
   */
  type: 'Action.Execute' | 'Action.Submit';

  /**
   * The id of this Adaptive Card Invoke Action.
   */
  id?: string;

  /**
   * The Verb of this adaptive card action invoke.
   */
  verb?: string;

  /**
   * The Data of this adaptive card action invoke.
   */
  data: Record<string, any>;
};
