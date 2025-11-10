import { ANSI } from './ansi';
import { ILogger, ILoggerOptions, LogLevel } from './logger';

export class ConsoleLogger implements ILogger {
  readonly loggerOptions: ILoggerOptions;

  protected readonly name: string;
  protected readonly level: LogLevel;

  private readonly _enabled: boolean;
  private readonly _levels = {
    error: 100,
    warn: 200,
    info: 300,
    debug: 400,
    trace: 500,
  };

  private readonly _colors = {
    error: ANSI.ForegroundRed,
    warn: ANSI.ForegroundYellow,
    info: ANSI.ForegroundCyan,
    debug: ANSI.ForegroundMagenta,
    trace: ANSI.BackgroundBlue
  };

  constructor(name: string, options?: ILoggerOptions) {
    this.name = name;

    const env = typeof process === 'undefined' ? undefined : process.env;
    const logNamePattern = env?.LOG || options?.pattern || '*';
    this._enabled = parseMagicExpr(logNamePattern).test(name);
    this.level = parseLogLevel(env?.LOG_LEVEL) || options?.level || 'info';
    this.loggerOptions = options ?? {
      level: this.level,
      pattern: logNamePattern,
    };
  }

  error(...msg: any[]) {
    this.log('error', ...msg);
  }

  warn(...msg: any[]) {
    this.log('warn', ...msg);
  }

  info(...msg: any[]) {
    this.log('info', ...msg);
  }

  debug(...msg: any[]) {
    this.log('debug', ...msg);
  }

  trace(...msg: any[]) {
    this.log('trace', ...msg);
  }

  log(level: LogLevel, ...msg: any[]) {
    if (!this._enabled) {
      return;
    }

    if (this._levels[level] > this._levels[this.level]) {
      return;
    }

    const prefix = [this._colors[level], ANSI.Bold, `[${level.toUpperCase()}]`];
    const name = [this.name, ANSI.ForegroundReset, ANSI.BoldReset];

    for (const m of msg) {
      let text = new String(m);

      if (typeof m === 'object') {
        text = JSON.stringify(m, null, 2);
      }

      for (const line of text.split('\n')) {
        console[level](prefix.join(''), name.join(''), line);
      }
    }
  }

  child(name: string) {
    return new ConsoleLogger(`${this.name}/${name}`, {
      level: this.level,
    });
  }
}

function parseMagicExpr(pattern: string) {
  let res = '';
  const parts = pattern.split('*');

  for (let i = 0; i < parts.length; i++) {
    if (i > 0) {
      res += '.*';
    }

    res += parts[i];
  }

  return new RegExp(res);
}

function parseLogLevel(level?: string): LogLevel | undefined {
  const value = level?.toLowerCase();
  switch (value) {
    case 'error':
    case 'warn':
    case 'info':
    case 'debug':
    case 'trace':
      return value;
    default:
      return undefined;
  }
}
