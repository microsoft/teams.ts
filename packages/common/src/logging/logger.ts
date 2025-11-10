export type LogLevel = 'error' | 'warn' | 'info' | 'debug' | 'trace';

export interface ILoggerOptions {
  /**
   * Minimum severity level to log. When provided, log entries with lower severity are ignored.
   */
  readonly level?: LogLevel;

  /**
   * Logger name filter pattern. May contain wild cards.
   * When provided, the logger is only enabled if its name matches the pattern.
   */
  readonly pattern?: string;
}

export interface ILogger {
  /**
   * Active logger options for this logger
   */
  loggerOptions?: ILoggerOptions;

  /**
   * Output debug message
   * @param msg any data to log
   */
  debug(...msg: any[]): void;

  /**
   * Output info message
   * @param msg any data to log
   */
  info(...msg: any[]): void;

  /**
   * Output warn message
   * @param msg any data to log
   */
  warn(...msg: any[]): void;

  /**
   * Output error message
   * @param msg any data to log
   */
  error(...msg: any[]): void;

  /**
   * Output trace messages (with stack trace)
   * @param msg any data to log
   */
  trace(...msg: any[]): void;

  /**
   * Output log message
   * @param msg any data to log
   */
  log(level: LogLevel, ...msg: any[]): void;

  /**
   * Create a child logger instance
   */
  child(name: string): ILogger;
}
