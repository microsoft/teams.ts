import { OpenUrlAction } from './open-url';

describe('Actions.OpenUrl', () => {
  it('should build', () => {
    const action = new OpenUrlAction('http://a').withUrl('http://b');
    expect(action.url).toEqual('http://b');
  });

  it('should build from interface', () => {
    const action = OpenUrlAction.from({ url: 'http://b' });
    expect(action.url).toEqual('http://b');
  });
});
