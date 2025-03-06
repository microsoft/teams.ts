import { ANSI } from './ansi';

type StringLike = {
  toString(): string;
};

export class String implements StringLike {
  private _value: string = '';

  clear() {
    this._value = '';
    return this;
  }

  append(text: StringLike) {
    this._value += text;
    return;
  }

  reset() {
    this._value += ANSI.Reset;
    return this;
  }

  bold(text: StringLike) {
    this._value += ANSI.Bold + text + ANSI.BoldReset;
    return this;
  }

  italic(text: StringLike) {
    this._value += ANSI.Italic + text + ANSI.ItalicReset;
    return this;
  }

  underline(text: StringLike) {
    this._value += ANSI.Underline + text + ANSI.UnderlineReset;
    return this;
  }

  strike(text: StringLike) {
    this._value += ANSI.Strike + text + ANSI.StrikeReset;
    return this;
  }

  black(text: StringLike) {
    this._value += ANSI.ForegroundBlack + text + ANSI.ForegroundReset;
    return this;
  }

  bgBlack(text: StringLike) {
    this._value += ANSI.BackgroundBlack + text + ANSI.BackgroundReset;
    return this;
  }

  red(text: StringLike) {
    this._value += ANSI.ForegroundRed + text + ANSI.ForegroundReset;
    return this;
  }

  bgRed(text: StringLike) {
    this._value += ANSI.BackgroundRed + text + ANSI.BackgroundReset;
    return this;
  }

  green(text: StringLike) {
    this._value += ANSI.ForegroundGreen + text + ANSI.ForegroundReset;
    return this;
  }

  bgGeen(text: StringLike) {
    this._value += ANSI.BackgroundGreen + text + ANSI.BackgroundReset;
    return this;
  }

  yellow(text: StringLike) {
    this._value += ANSI.ForegroundYellow + text + ANSI.ForegroundReset;
    return this;
  }

  bgYellow(text: StringLike) {
    this._value += ANSI.BackgroundYellow + text + ANSI.BackgroundReset;
    return this;
  }

  blue(text: StringLike) {
    this._value += ANSI.ForegroundBlue + text + ANSI.ForegroundReset;
    return this;
  }

  bgBlue(text: StringLike) {
    this._value += ANSI.BackgroundBlue + text + ANSI.BackgroundReset;
    return this;
  }

  magenta(text: StringLike) {
    this._value += ANSI.ForegroundMagenta + text + ANSI.ForegroundReset;
    return this;
  }

  bgMagenta(text: StringLike) {
    this._value += ANSI.BackgroundMagenta + text + ANSI.BackgroundReset;
    return this;
  }

  cyan(text: StringLike) {
    this._value += ANSI.ForegroundCyan + text + ANSI.ForegroundReset;
    return this;
  }

  bgCyan(text: StringLike) {
    this._value += ANSI.BackgroundCyan + text + ANSI.BackgroundReset;
    return this;
  }

  white(text: StringLike) {
    this._value += ANSI.ForegroundWhite + text + ANSI.ForegroundReset;
    return this;
  }

  bgWhite(text: StringLike) {
    this._value += ANSI.BackgroundWhite + text + ANSI.BackgroundReset;
    return this;
  }

  gray(text: StringLike) {
    this._value += ANSI.ForegroundGray + text + ANSI.ForegroundReset;
    return this;
  }

  default(text: StringLike) {
    this._value += ANSI.ForegroundDefault + text + ANSI.ForegroundReset;
    return this;
  }

  bgDefault(text: StringLike) {
    this._value += ANSI.BackgroundDefault + text + ANSI.BackgroundReset;
    return this;
  }

  toString() {
    return this._value;
  }
}
