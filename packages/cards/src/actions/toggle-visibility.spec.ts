import { ToggleVisibilityAction } from './toggle-visibility';

describe('Actions.ToggleVisibility', () => {
  it('should build', () => {
    const action = new ToggleVisibilityAction().addTargets('a', 'b').addTargets({
      type: 'TargetElement',
      elementId: '1',
      isVisible: true,
    });

    expect(action.targetElements).toHaveLength(3);
    expect(action.targetElements[0]).toEqual('a');
    expect(action.targetElements[1]).toEqual('b');
    expect(action.targetElements[2]).toEqual({
      type: 'TargetElement',
      elementId: '1',
      isVisible: true,
    });
  });

  it('should build from interface', () => {
    const action = ToggleVisibilityAction.from({
      targetElements: [
        'a',
        'b',
        {
          type: 'TargetElement',
          elementId: '1',
          isVisible: true,
        },
      ],
    });

    expect(action.targetElements).toHaveLength(3);
    expect(action.targetElements[0]).toEqual('a');
    expect(action.targetElements[1]).toEqual('b');
    expect(action.targetElements[2]).toEqual({
      type: 'TargetElement',
      elementId: '1',
      isVisible: true,
    });
  });
});
