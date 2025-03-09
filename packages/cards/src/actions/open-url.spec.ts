import { OpenUrl } from './open-url';

describe('Actions.OpenUrl', () => {
  it('should build', () => {
    const action = new OpenUrl('http://a').withUrl('http://b');
    expect(action.url).toEqual('http://b');
  });

  it('should build from interface', () => {
    const action = OpenUrl.from({ url: 'http://b' });
    expect(action.url).toEqual('http://b');
  });
});
