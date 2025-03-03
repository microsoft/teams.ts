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

  it('should create child logger with prefix', () => {
    const logger = new ConsoleLogger('parent');
    const childLogger = logger.child('child');

    expect(childLogger).toBeInstanceOf(ConsoleLogger);
    expect((childLogger as any).name).toBe('parent/child');
    expect((childLogger as any).level).toBe('info');
  });

  it('should respect environment variable for logging pattern', () => {
    process.env.LOG = 'test*';
    const logger = new ConsoleLogger('testLogger');
    logger.info('This should log');
    expect(infoSpy).toHaveBeenCalled();

    const nonMatchingLogger = new ConsoleLogger('nonMatchingLogger');
    nonMatchingLogger.info('This should not log');
    expect(infoSpy).toHaveBeenCalledTimes(1);
  });

  it('should format object messages properly', () => {
    const logger = new ConsoleLogger('test');
    const obj = { key: 'value' };
    logger.info(obj);

    expect(infoSpy).toHaveBeenCalledTimes(3);
  });
});
