import { BaseElement } from '../base';

/**
 * [SUPPORTED ONLY IN JAVASCRIPT SDK] Determines the position of the label. It can take 'inline' and 'above' values. By default, the label is placed 'above' when label position is not specified.
 */
export type InputLabelPosition = 'inline' | 'above';

/**
 * [SUPPORTED ONLY IN JAVASCRIPT SDK] Style hint for input fields. Allows input fields to appear as read-only but when user clicks/focuses on the field, it allows them to update those fields.
 */
export type InputStyle = 'revealOnHover' | 'default';

export interface BaseInputElement extends BaseElement {
  /**
   * Error message to display when entered input is invalid
   */
  errorMessage?: string;

  /**
   * Whether or not this input is required
   */
  isRequired?: boolean;

  /**
   * Label for this input
   */
  label?: string;

  /**
   * [SUPPORTED ONLY IN JAVASCRIPT SDK] Determines the position of the label. It can take 'inline' and 'above' values. By default, the label is placed 'above' when label position is not specified.
   */
  labelPosition?: InputLabelPosition;

  /**
   * [SUPPORTED ONLY IN JAVASCRIPT SDK] Determines the width of the label in percent like 40 or a specific pixel width like ‘40px’ when label is placed inline with the input. labelWidth would be ignored when the label is displayed above the input.
   */
  labelWidth?: string | number;

  /**
   * [SUPPORTED ONLY IN JAVASCRIPT SDK] Style hint for input fields. Allows input fields to appear as read-only but when user clicks/focuses on the field, it allows them to update those fields.
   */
  inputStyle?: InputStyle;
}
