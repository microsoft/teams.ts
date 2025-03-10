import { CollabStageAction, CollabStageData, CollabStageValueData } from './collab-stage';

describe('Actions.Submit.CollabStage', () => {
  it('should build', () => {
    const action = new CollabStageAction().withData(new CollabStageData()).withValue({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });

    expect(action.data.msteams.value?.tabInfo).toEqual({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });
  });

  it('should build from interface', () => {
    const action = CollabStageAction.from({
      data: {
        msteams: new CollabStageData(
          new CollabStageValueData({
            name: 'test',
            entityId: 'test',
            contentUrl: 'http://localhost/tabs/test',
          })
        ),
      },
    });

    expect(action.data.msteams.value?.tabInfo).toEqual({
      name: 'test',
      entityId: 'test',
      contentUrl: 'http://localhost/tabs/test',
    });
  });
});
