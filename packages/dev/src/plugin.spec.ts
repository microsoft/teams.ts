import { DevtoolsPlugin } from './plugin';

describe('DevtoolsPlugin', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  describe('onInit', () => {
    it('should throw in production environment', () => {
      process.env.NODE_ENV = 'production';
      const plugin = new DevtoolsPlugin();

      expect(() => plugin.onInit()).toThrow(
        'Devtools plugin cannot be used in production environments'
      );
    });

    it('should not throw in development environment', () => {
      process.env.NODE_ENV = 'development';
      const plugin = new DevtoolsPlugin();
      // Mock the logger since @Logger() decorator isn't run in unit tests
      (plugin as any).log = { warn: jest.fn(), info: jest.fn(), debug: jest.fn() };

      expect(() => plugin.onInit()).not.toThrow();
    });

    it('should not throw when NODE_ENV is not set', () => {
      delete process.env.NODE_ENV;
      const plugin = new DevtoolsPlugin();
      (plugin as any).log = { warn: jest.fn(), info: jest.fn(), debug: jest.fn() };

      expect(() => plugin.onInit()).not.toThrow();
    });
  });
});
