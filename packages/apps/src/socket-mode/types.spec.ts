import type { SocketModeOptions } from '../index';

describe('SocketModeOptions public API', () => {
  it('exposes exactly the geographies', () => {
    const supportedOptions: Record<keyof SocketModeOptions, true> = {
      geos: true,
    };

    expect(Object.keys(supportedOptions)).toEqual(['geos']);
  });
});
