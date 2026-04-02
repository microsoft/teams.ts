import { SubmitActionData } from '../core';

const RESERVED_KEYWORD = 'action';

/**
 * Utility class for creating submit data with action-based routing.
 *
 * Extends the generated `SubmitActionData` with a convenience constructor
 * that accepts an `action` identifier for handler routing.
 *
 * @example
 * ```ts
 * new SubmitAction().withData(new SubmitData('save_profile', { entity_id: '12345' }))
 * ```
 */
export class SubmitData extends SubmitActionData {
  constructor(action: string, extraData?: Record<string, unknown>) {
    super();
    if (extraData) {
      Object.assign(this, extraData);
    }
    this[RESERVED_KEYWORD] = action;
  }
}
