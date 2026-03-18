import { CollabStageInvokeDataValue, InvokeSubmitActionData, SubmitActionData } from '../../core';

import { CollabStageAction } from './collab-stage';

describe('Actions.Submit.CollabStage', () => {
  it('should build', () => {
    const action = new CollabStageAction().withData(
      new InvokeSubmitActionData(undefined)
    ).withValue({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });

    const msteams = action.data.msteams as InvokeSubmitActionData;
    const value = msteams.value as CollabStageInvokeDataValue;
    expect(value.tabInfo).toEqual({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });
  });

  it('should build from interface', () => {
    const action = CollabStageAction.from({
      data: new SubmitActionData({
        msteams: new InvokeSubmitActionData(
          new CollabStageInvokeDataValue({
            tabInfo: {
              name: 'test',
              entityId: 'test',
              contentUrl: 'http://localhost/tabs/test',
            },
          })
        ),
      }),
    });

    const msteams = action.data.msteams as InvokeSubmitActionData;
    const value = msteams.value as CollabStageInvokeDataValue;
    expect(value.tabInfo).toEqual({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });
  });
});
