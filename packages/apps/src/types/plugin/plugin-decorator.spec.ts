import { Plugin } from './plugin-decorator';

describe('@Plugin', () => {
  it('should have metadata', () => {
    @Plugin({
      name: 'test',
      version: '0.0.0',
    })
    class Test {}

    const test: any = new Test();
    expect(test.__metadata__).toBeDefined();
    expect(test.__metadata__.name).toEqual('test');
    expect(test.__metadata__.version).toEqual('0.0.0');
  });
});
