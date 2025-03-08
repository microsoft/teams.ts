import { CodeBlock } from './code-block';

describe('CodeBlock', () => {
  it('should build', () => {
    const element = new CodeBlock()
      .withCode('let i = 0;')
      .withLanguage('JavaScript')
      .withStartLineNumber(3);

    expect(element.codeSnippet).toEqual('let i = 0;');
    expect(element.language).toEqual('JavaScript');
    expect(element.startLineNumber).toEqual(3);
  });

  it('should build', () => {
    const element = CodeBlock.from({
      codeSnippet: 'let i = 0;',
      language: 'JavaScript',
      startLineNumber: 3,
    });

    expect(element.codeSnippet).toEqual('let i = 0;');
    expect(element.language).toEqual('JavaScript');
    expect(element.startLineNumber).toEqual(3);
  });
});
