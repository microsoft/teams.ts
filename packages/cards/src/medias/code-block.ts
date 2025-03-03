import { BaseElement } from '../base';

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
export interface CodeBlock extends BaseElement {
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

export type CodeBlockParams = Omit<CodeBlock, 'type'>;

/**
 * Displays a block of code with syntax highlighting
 */
export function CodeBlock(params?: CodeBlockParams): CodeBlock {
  return {
    type: 'CodeBlock',
    ...params,
  };
}
