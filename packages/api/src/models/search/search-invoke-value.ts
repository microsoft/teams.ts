/**
 * The kind of search invoke value. Must be either `search`, `searchAnswer`, or `typeahead`.
 */
export type SearchInvokeType = 'search' | 'searchAnswer' | 'typeahead';

/**
 * Defines the query options for an Invoke activity with Name of 'application/search'.
 */
export type SearchInvokeOptions = {
  /**
   * The starting reference number from which ordered search results should be returned.
   */
  skip?: number;

  /**
   * The number of search results that should be returned.
   */
  top?: number;
};

/**
 * Defines the structure that arrives in the Activity.Value for an Invoke activity with
 * Name of 'application/search'. Sent by Adaptive Card dynamic typeahead `Input.ChoiceSet`
 * inputs (via `choices.data` / `Data.Query`).
 */
export type SearchInvokeValue = {
  /**
   * The kind for this search invoke value. Must be either `search`, `searchAnswer`, or
   * `typeahead`. Omitted by Adaptive Card dynamic typeahead `Input.ChoiceSet` inputs, so this
   * may be `undefined`.
   */
  kind?: SearchInvokeType;

  /**
   * The query text of this search invoke value.
   */
  queryText: string;

  /**
   * The query options for this search invoke.
   */
  queryOptions?: SearchInvokeOptions;

  /**
   * Context information about the query, such as the UI control that issued the query.
   * The type is dependent on the `kind` field. For `search` and `searchAnswer` there is
   * no defined context value.
   */
  context?: any;

  /**
   * The identifier of the dataset from which to fetch the choices, as authored on the
   * Adaptive Card `Data.Query`.
   */
  dataset?: string;
};
