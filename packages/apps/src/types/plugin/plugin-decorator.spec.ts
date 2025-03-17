import 'reflect-metadata';

import { Plugin, PLUGIN_METADATA_KEY } from './plugin-decorator';

describe('@Plugin', () => {
  it('should have metadata', () => {
    @Plugin({
      name: 'test',
      version: '0.2.0',
      description: 'testing123',
    })
    class Test {}

    const metadata = Reflect.getMetadata(PLUGIN_METADATA_KEY, Test);

    expect(metadata).toBeDefined();
    expect(metadata).toEqual({
      name: 'test',
      version: '0.2.0',
      description: 'testing123',
    });
  });

  it('should have default metadata', () => {
    @Plugin()
    class Test {}

    const metadata = Reflect.getMetadata(PLUGIN_METADATA_KEY, Test);

    expect(metadata).toBeDefined();
    expect(metadata).toEqual({
      name: 'Test',
      version: '0.0.0',
    });
  });
});
