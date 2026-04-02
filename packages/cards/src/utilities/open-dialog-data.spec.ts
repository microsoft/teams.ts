import { OpenDialogData } from './open-dialog-data';

describe('OpenDialogData', () => {
  it('should set msteams and dialog_id', () => {
    const data = new OpenDialogData('simple_form');
    expect(data.msteams).toEqual({ type: 'task/fetch' });
    expect(data.dialog_id).toBe('simple_form');
  });

  it('should include extra data', () => {
    const data = new OpenDialogData('simple_form', { custom_key: 'value' });
    expect(data.msteams).toEqual({ type: 'task/fetch' });
    expect(data.dialog_id).toBe('simple_form');
    expect(data.custom_key).toBe('value');
  });

  it('should produce the same payload as manual construction', () => {
    const data = new OpenDialogData('my_dialog');
    expect(data).toEqual(
      expect.objectContaining({
        msteams: { type: 'task/fetch' },
        dialog_id: 'my_dialog',
      })
    );
  });
});
