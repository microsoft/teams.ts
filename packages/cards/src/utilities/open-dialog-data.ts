import { SubmitActionData, TaskFetchSubmitActionData } from '../core';

const RESERVED_KEYWORD = 'dialog_id';

/**
 * Convenience class for creating the data payload to open a dialog
 * from an Action.Submit.
 *
 * Abstracts away the `msteams: { type: 'task/fetch' }` protocol detail
 * and sets a reserved `dialog_id` field for handler routing.
 *
 * @example
 * ```ts
 * new SubmitAction().withData(new OpenDialogData('simple_form'))
 * ```
 */
export class OpenDialogData extends SubmitActionData {
  constructor(dialogId: string, extraData?: Record<string, unknown>) {
    super({ msteams: new TaskFetchSubmitActionData() });
    if (extraData) {
      Object.assign(this, extraData);
    }
    this[RESERVED_KEYWORD] = dialogId;
  }
}
