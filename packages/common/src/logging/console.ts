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

  child(name: string, overrideOptions?: ILoggerOptions) {
    const mergedPattern = mergePatterns(
      this.loggerOptions.pattern,
      overrideOptions?.pattern
    );

    return new ConsoleLogger(`${this.name}/${name}`, {
      ...this.loggerOptions,
      ...overrideOptions,
      pattern: mergedPattern
    });
  }
}

function parsePatternString(pattern: string): { inclusions: string[]; exclusions: string[] } {
  const patterns = pattern.split(',').map(p => p.trim());
  const inclusions: string[] = [];
  const exclusions: string[] = [];

  for (const p of patterns) {
    if (p.startsWith('-')) {
      exclusions.push(p.substring(1));
    } else {
      inclusions.push(p);
    }
  }

  return { inclusions, exclusions };
}

function parseMagicExpr(pattern: string) {
  const { inclusions: inclusionPatterns, exclusions: exclusionPatterns } = parsePatternString(pattern);

  const inclusions: RegExp[] = inclusionPatterns.map(p => patternToRegex(p));
  const exclusions: RegExp[] = exclusionPatterns.map(p => patternToRegex(p));

  // If only exclusions specified, implicitly include everything
  if (inclusions.length === 0 && exclusions.length > 0) {
    inclusions.push(/.*/);
  }

  return {
    test: (name: string) => {
      // Check if name matches any inclusion pattern
      const matchesInclusion = inclusions.some(regex => regex.test(name));
      if (!matchesInclusion) return false;

      // Check if name matches any exclusion pattern
      const matchesExclusion = exclusions.some(regex => regex.test(name));

      // Must match inclusion AND not match any exclusion
      return !matchesExclusion;
    }
  };
}

function patternToRegex(pattern: string): RegExp {
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

function mergePatterns(parentPattern?: string, childPattern?: string): string {
  if (!parentPattern && !childPattern) {
    return '*';
  }

  if (!parentPattern) {
    return childPattern!;
  }

  if (!childPattern) {
    return parentPattern;
  }

  const parent = parsePatternString(parentPattern);
  const child = parsePatternString(childPattern);

  // Combine and deduplicate inclusions
  let allInclusions = [...new Set([...parent.inclusions, ...child.inclusions])];

  // If only exclusions specified, implicitly include everything
  if (allInclusions.length === 0) {
    allInclusions = ['*'];
  }

  // Optimize: If '*' exists, it matches everything, so remove other inclusions
  const optimizedInclusions = allInclusions.includes('*') ? ['*'] : allInclusions;

  // Combine and deduplicate exclusions
  const allExclusions = [...new Set([...parent.exclusions, ...child.exclusions])];

  // Build merged pattern: combine inclusions and exclusions
  const inclusionStrings = optimizedInclusions;
  const exclusionStrings = allExclusions.map(e => '-' + e);
  const allPatterns = [...inclusionStrings, ...exclusionStrings];

  return allPatterns.join(',');
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
