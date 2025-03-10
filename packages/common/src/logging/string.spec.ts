import { ANSI } from './ansi';
import { String } from './string';

describe('String', () => {
  it('should clear', () => {
    const str = new String('testing').clear().toString();
    expect(str).toEqual('');
  });

  it('should append', () => {
    const str = new String('hello').append(' ', 'world').toString();
    expect(str).toEqual('hello world');
  });

  it('should reset', () => {
    const str = new String('test').reset().toString();
    expect(str.endsWith(ANSI.Reset)).toEqual(true);
  });

  it('should bold', () => {
    const str = new String().bold('test').toString();
    expect(str.startsWith(ANSI.Bold)).toEqual(true);
    expect(str.endsWith(ANSI.BoldReset)).toEqual(true);
  });

  it('should italic', () => {
    const str = new String().italic('test').toString();
    expect(str.startsWith(ANSI.Italic)).toEqual(true);
    expect(str.endsWith(ANSI.ItalicReset)).toEqual(true);
  });

  it('should underline', () => {
    const str = new String().underline('test').toString();
    expect(str.startsWith(ANSI.Underline)).toEqual(true);
    expect(str.endsWith(ANSI.UnderlineReset)).toEqual(true);
  });

  it('should strike', () => {
    const str = new String().strike('test').toString();
    expect(str.startsWith(ANSI.Strike)).toEqual(true);
    expect(str.endsWith(ANSI.StrikeReset)).toEqual(true);
  });

  it('should black', () => {
    const str = new String().black('test').toString();
    expect(str.startsWith(ANSI.ForegroundBlack)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgBlack', () => {
    const str = new String().bgBlack('test').toString();
    expect(str.startsWith(ANSI.BackgroundBlack)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should red', () => {
    const str = new String().red('test').toString();
    expect(str.startsWith(ANSI.ForegroundRed)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgRed', () => {
    const str = new String().bgRed('test').toString();
    expect(str.startsWith(ANSI.BackgroundRed)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should green', () => {
    const str = new String().green('test').toString();
    expect(str.startsWith(ANSI.ForegroundGreen)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgGreen', () => {
    const str = new String().bgGreen('test').toString();
    expect(str.startsWith(ANSI.BackgroundGreen)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should yellow', () => {
    const str = new String().yellow('test').toString();
    expect(str.startsWith(ANSI.ForegroundYellow)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgYellow', () => {
    const str = new String().bgYellow('test').toString();
    expect(str.startsWith(ANSI.BackgroundYellow)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should blue', () => {
    const str = new String().blue('test').toString();
    expect(str.startsWith(ANSI.ForegroundBlue)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgBlue', () => {
    const str = new String().bgBlue('test').toString();
    expect(str.startsWith(ANSI.BackgroundBlue)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should magenta', () => {
    const str = new String().magenta('test').toString();
    expect(str.startsWith(ANSI.ForegroundMagenta)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgMagenta', () => {
    const str = new String().bgMagenta('test').toString();
    expect(str.startsWith(ANSI.BackgroundMagenta)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should cyan', () => {
    const str = new String().cyan('test').toString();
    expect(str.startsWith(ANSI.ForegroundCyan)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgCyan', () => {
    const str = new String().bgCyan('test').toString();
    expect(str.startsWith(ANSI.BackgroundCyan)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should white', () => {
    const str = new String().white('test').toString();
    expect(str.startsWith(ANSI.ForegroundWhite)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgWhite', () => {
    const str = new String().bgWhite('test').toString();
    expect(str.startsWith(ANSI.BackgroundWhite)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });

  it('should gray', () => {
    const str = new String().gray('test').toString();
    expect(str.startsWith(ANSI.ForegroundGray)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should default', () => {
    const str = new String().default('test').toString();
    expect(str.startsWith(ANSI.ForegroundDefault)).toEqual(true);
    expect(str.endsWith(ANSI.ForegroundReset)).toEqual(true);
  });

  it('should bgDefault', () => {
    const str = new String().bgDefault('test').toString();
    expect(str.startsWith(ANSI.BackgroundDefault)).toEqual(true);
    expect(str.endsWith(ANSI.BackgroundReset)).toEqual(true);
  });
});
