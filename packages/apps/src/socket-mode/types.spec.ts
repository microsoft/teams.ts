import type { SocketModeOptions } from '../index';

describe('SocketModeOptions public API', () => {
  it('exposes exactly the negotiate base URL and geographies', () => {
    const supportedOptions: Record<keyof SocketModeOptions, true> = {
      negotiateBaseUrl: true,
      geos: true,
    };

    expect(Object.keys(supportedOptions).sort()).toEqual(['geos', 'negotiateBaseUrl']);
  });
});
