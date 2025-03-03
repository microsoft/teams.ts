import { ANSI } from './ansi';
import { Logger, LoggerOptions, LogLevel } from './logger';

export class ConsoleLogger implements Logger {
  protected readonly name: string;
  protected readonly level: LogLevel;

  private readonly _pattern: RegExp;
  private readonly _levels = {
    error: 100,
    warn: 200,
    info: 300,
    debug: 400,
  };

  private readonly _colors = {
    error: ANSI.ForegroundRed,
    warn: ANSI.ForegroundYellow,
    info: ANSI.ForegroundCyan,
    debug: ANSI.ForegroundMagenta,
  };

  constructor(name: string, options?: LoggerOptions) {
    this.name = name;
    this.level = options?.level || 'info';
    this._pattern = parseMagicExpr(process.env.LOG || '*');
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

  log(level: LogLevel, ...msg: any[]) {
    if (this._levels[level] > this._levels[this.level]) {
      return;
    }

    if (!this._pattern.test(this.name)) {
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
