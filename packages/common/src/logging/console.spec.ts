import { ConsoleLogger } from './console';

describe('ConsoleLogger', () => {
  let errorSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;
  let infoSpy: jest.SpyInstance;
  let debugSpy: jest.SpyInstance;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
    debugSpy = jest.spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log errors', () => {
    const logger = new ConsoleLogger('test');
    logger.error('This is an error');

    expect(errorSpy).toHaveBeenCalledTimes(1);
  });

  it('should log warnings', () => {
    const logger = new ConsoleLogger('test');
    logger.warn('This is a warning');

    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('should log info', () => {
    const logger = new ConsoleLogger('test');
    logger.info('This is an info');

    expect(infoSpy).toHaveBeenCalledTimes(1);
  });

  it('should log debug', () => {
    const logger = new ConsoleLogger('test', { level: 'debug' });
    logger.debug('This is a debug message');

    expect(debugSpy).toHaveBeenCalledTimes(1);
  });

  it('should not log debug messages if level is info', () => {
    const logger = new ConsoleLogger('test');
    logger.debug('This is a debug message');

    expect(debugSpy).not.toHaveBeenCalled();
  });

  it('should use default options when process is undefined', () => {
    const originalProcess = global.process;
    global.process = undefined as any;
    const logger = new ConsoleLogger('test');
    logger.info('This is an info message');
    expect(infoSpy).toHaveBeenCalledTimes(1);

    global.process = originalProcess;
  });

  it.each`
    envLogLevel  | optionLogLevel
    ${'error'}   | ${undefined}
    ${'ERROR'}   | ${'info'}
    ${undefined} | ${'error'}
    ${'bogus'}   | ${'error'}
  `(
    'should log only error when environment variable is $envLogLevel and option log level is $optionLogLevel',
    ({ envLogLevel, optionLogLevel }) => {
      if (envLogLevel) {
        process.env.LOG_LEVEL = envLogLevel;
      }
      const logger = new ConsoleLogger('test', { level: optionLogLevel });
      logger.warn('This is a warning message');
      expect(warnSpy).not.toHaveBeenCalled();
      logger.info('This is an info message');
      expect(infoSpy).not.toHaveBeenCalled();
      logger.debug('This is a debug message');
      expect(debugSpy).not.toHaveBeenCalled();

      logger.error('This is an error message');
      expect(errorSpy).toHaveBeenCalledTimes(1);
    }
  );

  it('should create child logger with prefix', () => {
    const logger = new ConsoleLogger('parent');
    const childLogger = logger.child('child');

    expect(childLogger).toBeInstanceOf(ConsoleLogger);
    expect((childLogger as any).name).toBe('parent/child');
    expect((childLogger as any).level).toBe('info');
  });

  it.each`
    envPattern   | optionPattern
    ${'test*'}   | ${undefined}
    ${undefined} | ${'test*'}
    ${'test*'}   | ${'nonMatching*'}
  `(
    'should respect logging pattern when environment variable is $envPattern and option pattern is $optionPattern',
    ({ envPattern, optionPattern }) => {
      if (envPattern) {
        process.env.LOG = envPattern;
      }
      const logger = new ConsoleLogger('testLogger', { pattern: optionPattern });
      logger.info('This should log');
      expect(infoSpy).toHaveBeenCalled();

      const nonMatchingLogger = new ConsoleLogger('nonMatchingLogger', { pattern: optionPattern });
      nonMatchingLogger.info('This should not log');
      expect(infoSpy).toHaveBeenCalledTimes(1);
    }
  );

  it('should format object messages properly', () => {
    const logger = new ConsoleLogger('test');
    const obj = { key: 'value' };
    logger.info(obj);

    expect(infoSpy).toHaveBeenCalledTimes(3);
  });

  describe('pattern matching with exclusions', () => {
    afterEach(() => {
      delete process.env.LOG;
    });

    it('should exclude specific logger with *,-LoggerName pattern', () => {
      process.env.LOG = '*,-TokenManager';

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalled();
    });

    it('should exclude loggers matching wildcard pattern', () => {
      process.env.LOG = '*,-MSAL*';

      const msalLogger = new ConsoleLogger('MSAL/TokenManager');
      msalLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const msalClientLogger = new ConsoleLogger('MSALClient');
      msalClientLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalled();
    });

    it('should support multiple inclusion patterns', () => {
      process.env.LOG = 'App*,Token*';

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const graphLogger = new ConsoleLogger('GraphClient');
      graphLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);
    });

    it('should combine multiple inclusions with exclusions', () => {
      process.env.LOG = 'App*,Token*,-TokenInternal';

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const internalLogger = new ConsoleLogger('TokenInternal');
      internalLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const graphLogger = new ConsoleLogger('GraphClient');
      graphLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);
    });

    it('should make exclusions always win over inclusions', () => {
      process.env.LOG = 'App*,-App*';

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appClientLogger = new ConsoleLogger('AppClient');
      appClientLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();
    });

    it('should support exclusion-only patterns (implicit match all)', () => {
      process.env.LOG = '-TokenManager';

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalled();
    });

    it('should support multiple exclusions', () => {
      process.env.LOG = '*,-Internal*,-*Debug';

      const internalLogger = new ConsoleLogger('InternalService');
      internalLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const debugLogger = new ConsoleLogger('AppDebug');
      debugLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);
    });

    it('should handle whitespace in comma-separated patterns', () => {
      process.env.LOG = 'App* , Token* , -TokenInternal';

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const internalLogger = new ConsoleLogger('TokenInternal');
      internalLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);
    });

    it('should handle exclusion patterns with wildcards at different positions', () => {
      process.env.LOG = '*,-*Internal,-Debug*,-*Middle*';

      const internalLogger = new ConsoleLogger('ServiceInternal');
      internalLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const debugLogger = new ConsoleLogger('DebugManager');
      debugLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const middleLogger = new ConsoleLogger('ServiceMiddleManager');
      middleLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);
    });

    it('should match everything when pattern is *', () => {
      process.env.LOG = '*';

      const logger1 = new ConsoleLogger('AnyLogger');
      logger1.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);

      const logger2 = new ConsoleLogger('AnotherLogger');
      logger2.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('pattern merging in child loggers', () => {
    afterEach(() => {
      delete process.env.LOG;
    });

    it('should merge basic patterns from parent and child', () => {
      const parent = new ConsoleLogger('Parent', { pattern: 'App*' });
      const child = parent.child('Child', { pattern: 'Token*' });

      expect((child as any).loggerOptions.pattern).toBe('App*,Token*');
    });

    it('should deduplicate inclusion patterns', () => {
      const parent = new ConsoleLogger('Parent', { pattern: 'App*,Token*' });
      const child = parent.child('Child', { pattern: 'App*' });

      expect((child as any).loggerOptions.pattern).toBe('App*,Token*');
    });

    it('should optimize wildcards by removing redundant patterns', () => {
      const parent = new ConsoleLogger('Parent', { pattern: '*,App*' });
      const child = parent.child('Child', { pattern: 'Token*' });

      expect((child as any).loggerOptions.pattern).toBe('*');
    });

    it('should merge exclusions from parent and child', () => {
      const parent = new ConsoleLogger('Parent', { pattern: '*,-MSAL*' });
      const child = parent.child('Child', { pattern: '-TokenInternal' });

      expect((child as any).loggerOptions.pattern).toBe('*,-MSAL*,-TokenInternal');

      // Verify behavior - MSAL and TokenInternal are both excluded
      const msalLogger = new ConsoleLogger('MSAL/Client', {
        pattern: '*,-MSAL*,-TokenInternal',
      });
      msalLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();

      const internalLogger = new ConsoleLogger('TokenInternal', {
        pattern: '*,-MSAL*,-TokenInternal',
      });
      internalLogger.info('Should not log');
      expect(infoSpy).not.toHaveBeenCalled();
    });

    it('should deduplicate exclusion patterns', () => {
      const parent = new ConsoleLogger('Parent', {
        pattern: '-MSAL*,-Internal*',
      });
      const child = parent.child('Child', { pattern: '-MSAL*' });

      expect((child as any).loggerOptions.pattern).toBe('*,-MSAL*,-Internal*');
    });

    it('should merge complex patterns with inclusions and exclusions', () => {
      const parent = new ConsoleLogger('Parent', {
        pattern: 'App*,-AppInternal',
      });
      const child = parent.child('Child', { pattern: 'Token*,-TokenDebug' });

      expect((child as any).loggerOptions.pattern).toBe(
        'App*,Token*,-AppInternal,-TokenDebug'
      );

      // Verify behavior
      process.env.LOG = 'App*,Token*,-AppInternal,-TokenDebug';

      const appLogger = new ConsoleLogger('AppManager');
      appLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(1);

      const tokenLogger = new ConsoleLogger('TokenManager');
      tokenLogger.info('Should log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const appInternalLogger = new ConsoleLogger('AppInternal');
      appInternalLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);

      const tokenDebugLogger = new ConsoleLogger('TokenDebug');
      tokenDebugLogger.info('Should not log');
      expect(infoSpy).toHaveBeenCalledTimes(2);
    });

    it('should handle multi-level inheritance without duplicates', () => {
      const grandparent = new ConsoleLogger('Grandparent', {
        pattern: 'App*,-AppInternal',
      });
      const parent = grandparent.child('Parent', { pattern: 'Token*' });
      const child = parent.child('Child', { pattern: 'Graph*,-GraphDebug' });

      expect((child as any).loggerOptions.pattern).toBe(
        'App*,Token*,Graph*,-AppInternal,-GraphDebug'
      );
    });

    it('should merge when parent has no pattern (defaults to *)', () => {
      const parent = new ConsoleLogger('Parent'); // No pattern = defaults to *
      const child = parent.child('Child', { pattern: '-TokenInternal' });

      expect((child as any).loggerOptions.pattern).toBe('*,-TokenInternal');
    });

    it('should preserve parent pattern when child has no pattern', () => {
      const parent = new ConsoleLogger('Parent', { pattern: 'App*,-AppInternal' });
      const child = parent.child('Child'); // No override options

      expect((child as any).loggerOptions.pattern).toBe('App*,-AppInternal');
    });

    it('should handle child with wildcard merging with parent exclusions', () => {
      const parent = new ConsoleLogger('Parent', { pattern: '*,-MSAL*' });
      const child = parent.child('Child', { pattern: '*,-TokenInternal' });

      expect((child as any).loggerOptions.pattern).toBe(
        '*,-MSAL*,-TokenInternal'
      );
    });
  });
});
