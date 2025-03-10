import { Action } from './base';

describe('Action', () => {
  it('should build', () => {
    const action = new Action()
      .withEnabled()
      .withEnabled(false)
      .withFallback('test')
      .withIconUrl('http://localhost')
      .withId('test-id')
      .withMode('primary')
      .withRequire('a', 'b')
      .withRequires({})
      .withRequire('hello', 'world')
      .withStyle('default')
      .withTitle('Test')
      .withTooltip('tooltip');

    expect(action.isEnabled).toEqual(false);
    expect(action.fallback).toEqual('test');
    expect(action.iconUrl).toEqual('http://localhost');
    expect(action.id).toEqual('test-id');
    expect(action.mode).toEqual('primary');
    expect(action.requires).toEqual({ hello: 'world' });
    expect(action.style).toEqual('default');
    expect(action.title).toEqual('Test');
    expect(action.tooltip).toEqual('tooltip');
  });
});
