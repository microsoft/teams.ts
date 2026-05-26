import { ISuggestedActionSubmitInvokeActivity } from './suggested-action-submit';

describe('SuggestedActionSubmitInvokeActivity', () => {
  it('should match the expected wire format', () => {
    const activity: ISuggestedActionSubmitInvokeActivity = {
      type: 'invoke',
      name: 'suggestedActions/submit',
      value: { vote: 'approve' },
    } as ISuggestedActionSubmitInvokeActivity;

    expect(activity.type).toEqual('invoke');
    expect(activity.name).toEqual('suggestedActions/submit');
    expect(activity.value).toStrictEqual({ vote: 'approve' });
  });

  it('should accept any structured value', () => {
    const activity: ISuggestedActionSubmitInvokeActivity = {
      type: 'invoke',
      name: 'suggestedActions/submit',
      value: { action: 'reject', reason: 'budget exceeded' },
    } as ISuggestedActionSubmitInvokeActivity;

    expect(activity.name).toEqual('suggestedActions/submit');
    expect(activity.value).toStrictEqual({ action: 'reject', reason: 'budget exceeded' });
  });
});
