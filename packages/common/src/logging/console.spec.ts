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
});
