import { BaseInputElement } from './base';

export type ChoiceInputStyle = 'compact' | 'expanded' | 'filtered';

/**
 * Allows a user to input a Choice.
 */
export interface ChoiceSetInput extends BaseInputElement {
  type: 'Input.ChoiceSet';

  /**
   * Choice options.
   */
  choices?: Choice[];

  /**
   * Allows dynamic fetching of choices from the bot to be displayed as suggestions in the dropdown when the user types in the input field.
   */
  'choices.data'?: ChoiceDataQuery;

  /**
   * Allow multiple choices to be selected.
   */
  isMultiSelect?: boolean;

  /**
   * the style of the choice input
   */
  style?: ChoiceInputStyle;

  /**
   * The initial choice (or set of choices) that should be selected. For multi-select, specify a comma-separated string of values.
   */
  value?: string;

  /**
   * Description of the input desired. Only visible when no selection has been made, the `style` is `compact` and `isMultiSelect` is `false`
   */
  placeholder?: string;

  /**
   * If `true`, allow text to wrap. Otherwise, text is clipped.
   */
  wrap?: boolean;
}

export type ChoiceSetInputParams = Omit<ChoiceSetInput, 'type' | 'choices'>;

/**
 * Allows a user to input a Choice.
 */
export function ChoiceSetInput(
  choices: Choice[] = [],
  params?: ChoiceSetInputParams
): ChoiceSetInput {
  return {
    type: 'Input.ChoiceSet',
    choices,
    ...params,
  };
}

/**
 * Describes a choice for use in a ChoiceSet.
 */
export interface Choice {
  /**
   * Text to display.
   */
  title: string;

  /**
   * The raw value for the choice. NOTE: do not use a `,` in the value, since a `ChoiceSet` with `isMultiSelect` set to `true` returns a comma-delimited string of choice values.
   */
  value: string;
}

/**
 * Describes a choice for use in a ChoiceSet.
 */
export function Choice(title: string, value: string): Choice {
  return { title, value };
}

/**
 * The data populated in the event payload for fetching dynamic choices, sent to the card-author to help identify the dataset from which choices might be fetched to be displayed in the dropdown. It might contain auxillary data to limit the maximum number of choices that can be sent and to support pagination.
 */
export interface ChoiceDataQuery {
  /**
   * The dataset to be queried to get the choices.
   */
  dataset: string;

  /**
   * The maximum number of choices that should be returned by the query. It can be ignored if the card-author wants to send a different number.
   */
  count?: number;

  /**
   * The number of choices to be skipped in the list of choices returned by the query. It can be ignored if the card-author does not want pagination.
   */
  skip?: number;
}

export type ChoiceDataQueryParams = Omit<ChoiceDataQuery, 'dataset'>;

/**
 * The data populated in the event payload for fetching dynamic choices, sent to the card-author to help identify the dataset from which choices might be fetched to be displayed in the dropdown. It might contain auxillary data to limit the maximum number of choices that can be sent and to support pagination.
 */
export function ChoiceDataQuery(dataset: string, params?: ChoiceDataQueryParams): ChoiceDataQuery {
  return {
    dataset,
    ...params,
  };
}
