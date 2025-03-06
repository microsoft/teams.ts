import { IInputElement, InputElement } from './base';

export type ChoiceInputStyle = 'compact' | 'expanded' | 'filtered';

/**
 * Allows a user to input a Choice.
 */
export interface IChoiceSetInput extends IInputElement {
  type: 'Input.ChoiceSet';

  /**
   * Choice options.
   */
  choices?: IChoice[];

  /**
   * Allows dynamic fetching of choices from the bot to be displayed as suggestions in the dropdown when the user types in the input field.
   */
  'choices.data'?: IChoiceDataQuery;

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

export type ChoiceSetInputOptions = Omit<IChoiceSetInput, 'type' | 'choices'>;

/**
 * Allows a user to input a Choice.
 */
export class ChoiceSetInput extends InputElement implements IChoiceSetInput {
  type: 'Input.ChoiceSet';

  /**
   * Choice options.
   */
  choices: IChoice[];

  /**
   * Allows dynamic fetching of choices from the bot to be displayed as suggestions in the dropdown when the user types in the input field.
   */
  'choices.data'?: IChoiceDataQuery;

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

  constructor(...choices: IChoice[]) {
    super();
    this.type = 'Input.ChoiceSet';
    this.choices = choices;
  }

  withOptions(value: ChoiceSetInputOptions) {
    Object.assign(this, value);
    return this;
  }

  withData(value: IChoiceDataQuery) {
    this['choices.data'] = value;
    return this;
  }

  withMultiSelect(value = true) {
    this.isMultiSelect = value;
    return this;
  }

  withStyle(value: ChoiceInputStyle) {
    this.style = value;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  withPlaceholder(value: string) {
    this.placeholder = value;
    return this;
  }

  withWrap(value = true) {
    this.wrap = value;
    return this;
  }

  addChoices(...value: IChoice[]) {
    this.choices.push(...value);
    return this;
  }
}

/**
 * Describes a choice for use in a ChoiceSet.
 */
export interface IChoice {
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
export class Choice implements IChoice {
  /**
   * Text to display.
   */
  title: string;

  /**
   * The raw value for the choice. NOTE: do not use a `,` in the value, since a `ChoiceSet` with `isMultiSelect` set to `true` returns a comma-delimited string of choice values.
   */
  value: string;

  constructor(title: string, value: string) {
    this.title = title;
    this.value = value;
  }
}

/**
 * The data populated in the event payload for fetching dynamic choices, sent to the card-author to help identify the dataset from which choices might be fetched to be displayed in the dropdown. It might contain auxillary data to limit the maximum number of choices that can be sent and to support pagination.
 */
export interface IChoiceDataQuery {
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

export type ChoiceDataQueryOptions = Omit<IChoiceDataQuery, 'dataset'>;

/**
 * The data populated in the event payload for fetching dynamic choices, sent to the card-author to help identify the dataset from which choices might be fetched to be displayed in the dropdown. It might contain auxillary data to limit the maximum number of choices that can be sent and to support pagination.
 */
export class ChoiceDataQuery implements IChoiceDataQuery {
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

  constructor(dataset: string) {
    this.dataset = dataset;
  }

  withOptions(value: ChoiceDataQueryOptions) {
    Object.assign(this, value);
    return this;
  }

  withCount(value: number) {
    this.count = value;
    return this;
  }

  withSkip(value: number) {
    this.skip = value;
    return this;
  }
}
