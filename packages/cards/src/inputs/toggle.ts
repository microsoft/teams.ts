import { BaseInputElement } from './base';

/**
 * Lets a user choose between two options.
 */
export interface ToggleInput extends BaseInputElement {
  type: 'Input.Toggle';

  /**
   * Title for the toggle
   */
  title: string;

  /**
   * The initial selected value. If you want the toggle to be initially on, set this to the value of valueOn‘s value.
   */
  value?: 'true' | 'false' | Omit<string, 'true' | 'false'>;

  /**
   * The value when toggle is off
   */
  valueOff?: 'false' | Omit<string, 'false'>;

  /**
   * The value when toggle is on
   */
  valueOn?: 'true' | Omit<string, 'true'>;

  /**
   * If `true`, allow text to wrap. Otherwise, text is clipped.
   */
  wrap?: boolean;
}

export type ToggleInputParams = Omit<ToggleInput, 'type' | 'title'>;

/**
 * Lets a user choose between two options.
 */
export function ToggleInput(title: string, params?: ToggleInputParams): ToggleInput {
  return {
    type: 'Input.Toggle',
    title,
    ...params,
  };
}
