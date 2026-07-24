/**
 * A single result returned in a `SearchInvokeResponse`. For Adaptive Card dynamic typeahead
 * `Input.ChoiceSet`, `title` is the display text and `value` is the submitted value.
 */
export type SearchInvokeResult = {
  /**
   * The display text of the result.
   */
  title: string;

  /**
   * The value submitted when the result is selected.
   */
  value: string;
};

/**
 * The value payload of a `SearchInvokeResponse`.
 */
export type SearchInvokeResponseValue = {
  /**
   * The list of search results.
   */
  results: SearchInvokeResult[];
};

/**
 * Defines the structure returned as the result of an Invoke activity with Name of
 * 'application/search'.
 */
export type SearchInvokeResponse = {
  /**
   * The response status code.
   */
  statusCode: number;

  /**
   * The type of this response.
   */
  type: 'application/vnd.microsoft.search.searchResponse';

  /**
   * The response value.
   */
  value: SearchInvokeResponseValue;
};
