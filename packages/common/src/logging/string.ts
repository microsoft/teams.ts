import { ANSI } from './ansi';

type StringLike = {
  toString(): string;
};

export class String implements StringLike {
  private _value: string;

  constructor(value = '') {
    this._value = value;
  }

  clear(): String {
    this._value = '';
    return this;
  }

  append(...text: StringLike[]): String {
    this._value += text.join('');
    return this;
  }

  reset(): String {
    this._value += ANSI.Reset;
    return this;
  }

  bold(text: StringLike): String {
    this._value += ANSI.Bold + text.toString() + ANSI.BoldReset;
    return this;
  }

  italic(text: StringLike): String {
    this._value += ANSI.Italic + text.toString() + ANSI.ItalicReset;
    return this;
  }

  underline(text: StringLike): String {
    this._value += ANSI.Underline + text.toString() + ANSI.UnderlineReset;
    return this;
  }

  strike(text: StringLike): String {
    this._value += ANSI.Strike + text.toString() + ANSI.StrikeReset;
    return this;
  }

  black(text: StringLike): String {
    this._value +=
      ANSI.ForegroundBlack + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgBlack(text: StringLike): String {
    this._value +=
      ANSI.BackgroundBlack + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  red(text: StringLike): String {
    this._value += ANSI.ForegroundRed + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgRed(text: StringLike): String {
    this._value += ANSI.BackgroundRed + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  green(text: StringLike): String {
    this._value +=
      ANSI.ForegroundGreen + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgGreen(text: StringLike): String {
    this._value +=
      ANSI.BackgroundGreen + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  yellow(text: StringLike): String {
    this._value +=
      ANSI.ForegroundYellow + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgYellow(text: StringLike): String {
    this._value +=
      ANSI.BackgroundYellow + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  blue(text: StringLike): String {
    this._value += ANSI.ForegroundBlue + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgBlue(text: StringLike): String {
    this._value += ANSI.BackgroundBlue + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  magenta(text: StringLike): String {
    this._value +=
      ANSI.ForegroundMagenta + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgMagenta(text: StringLike): String {
    this._value +=
      ANSI.BackgroundMagenta + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  cyan(text: StringLike): String {
    this._value += ANSI.ForegroundCyan + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgCyan(text: StringLike): String {
    this._value += ANSI.BackgroundCyan + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  white(text: StringLike): String {
    this._value +=
      ANSI.ForegroundWhite + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgWhite(text: StringLike): String {
    this._value +=
      ANSI.BackgroundWhite + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  gray(text: StringLike): String {
    this._value += ANSI.ForegroundGray + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  default(text: StringLike): String {
    this._value +=
      ANSI.ForegroundDefault + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgDefault(text: StringLike): String {
    this._value +=
      ANSI.BackgroundDefault + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  toString(): string {
    return this._value;
  }
}
