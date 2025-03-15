import { HttpPlugin } from '../../plugins';

import { Inject } from './inject-decorator';
import { Plugin } from './plugin-decorator';

@Plugin({
  name: 'test',
  version: '0.0.0',
})
class Test {
  @Inject()
  http!: HttpPlugin;
}

describe('@Inject', () => {
  it('should have metadata', () => {
    const test: any = new Test();
    expect(test).toBeDefined();
  });
});
