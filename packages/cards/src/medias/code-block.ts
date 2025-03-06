import { IElement, Element } from '../base';

export type CodeLanguage =
  | 'Bash'
  | 'C'
  | 'Cpp'
  | 'CSharp'
  | 'Css'
  | 'Dos'
  | 'Go'
  | 'Graphql'
  | 'Html'
  | 'Java'
  | 'JavaScript'
  | 'Json'
  | 'ObjectiveC'
  | 'Perl'
  | 'Php'
  | 'PlainText'
  | 'PowerShell'
  | 'Python'
  | 'Sql'
  | 'TypeScript'
  | 'VbNet'
  | 'Verilog'
  | 'Vhdl'
  | 'Xml';

/**
 * Displays a block of code with syntax highlighting
 */
export interface ICodeBlock extends IElement {
  type: 'CodeBlock';

  /**
   * which programming language to use.
   */
  language?: CodeLanguage;

  /**
   * code to display/highlight.
   */
  codeSnippet?: string;

  /**
   * which line number to display on the first line.
   */
  startLineNumber?: number;
}

export type CodeBlockOptions = Omit<ICodeBlock, 'type'>;

/**
 * Displays a block of code with syntax highlighting
 */
export class CodeBlock extends Element implements ICodeBlock {
  type: 'CodeBlock';

  /**
   * which programming language to use.
   */
  language?: CodeLanguage;

  /**
   * code to display/highlight.
   */
  codeSnippet?: string;

  /**
   * which line number to display on the first line.
   */
  startLineNumber?: number;

  constructor(options: CodeBlockOptions = {}) {
    super();
    this.type = 'CodeBlock';
    this.withOptions(options);
  }

  withOptions(value: CodeBlockOptions) {
    Object.assign(this, value);
    return this;
  }

  withLanguage(value: CodeLanguage) {
    this.language = value;
    return this;
  }

  withCode(value: string) {
    this.codeSnippet = value;
    return this;
  }

  withStartLineNumber(value: number) {
    this.startLineNumber = value;
    return this;
  }
}
