import { ANSI } from './ansi';

type StringLike = {
  toString(): string;
};

export class String implements StringLike {
  private _value: string;

  constructor(value = '') {
    this._value = value;
  }

  clear() {
    this._value = '';
    return this;
  }

  append(...text: StringLike[]) {
    this._value += text.join('');
    return this;
  }

  reset() {
    this._value += ANSI.Reset;
    return this;
  }

  bold(text: StringLike) {
    this._value += ANSI.Bold + text.toString() + ANSI.BoldReset;
    return this;
  }

  italic(text: StringLike) {
    this._value += ANSI.Italic + text.toString() + ANSI.ItalicReset;
    return this;
  }

  underline(text: StringLike) {
    this._value += ANSI.Underline + text.toString() + ANSI.UnderlineReset;
    return this;
  }

  strike(text: StringLike) {
    this._value += ANSI.Strike + text.toString() + ANSI.StrikeReset;
    return this;
  }

  black(text: StringLike) {
    this._value += ANSI.ForegroundBlack + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgBlack(text: StringLike) {
    this._value += ANSI.BackgroundBlack + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  red(text: StringLike) {
    this._value += ANSI.ForegroundRed + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgRed(text: StringLike) {
    this._value += ANSI.BackgroundRed + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  green(text: StringLike) {
    this._value += ANSI.ForegroundGreen + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgGreen(text: StringLike) {
    this._value += ANSI.BackgroundGreen + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  yellow(text: StringLike) {
    this._value += ANSI.ForegroundYellow + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgYellow(text: StringLike) {
    this._value += ANSI.BackgroundYellow + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  blue(text: StringLike) {
    this._value += ANSI.ForegroundBlue + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgBlue(text: StringLike) {
    this._value += ANSI.BackgroundBlue + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  magenta(text: StringLike) {
    this._value += ANSI.ForegroundMagenta + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgMagenta(text: StringLike) {
    this._value += ANSI.BackgroundMagenta + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  cyan(text: StringLike) {
    this._value += ANSI.ForegroundCyan + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgCyan(text: StringLike) {
    this._value += ANSI.BackgroundCyan + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  white(text: StringLike) {
    this._value += ANSI.ForegroundWhite + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgWhite(text: StringLike) {
    this._value += ANSI.BackgroundWhite + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  gray(text: StringLike) {
    this._value += ANSI.ForegroundGray + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  default(text: StringLike) {
    this._value += ANSI.ForegroundDefault + text.toString() + ANSI.ForegroundReset;
    return this;
  }

  bgDefault(text: StringLike) {
    this._value += ANSI.BackgroundDefault + text.toString() + ANSI.BackgroundReset;
    return this;
  }

  toString() {
    return this._value;
  }
}
