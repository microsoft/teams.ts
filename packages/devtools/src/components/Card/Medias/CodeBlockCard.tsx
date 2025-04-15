import { FC, memo, useEffect, useState } from 'react';
import { ICodeBlock } from '@microsoft/teams.cards';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import c from 'highlight.js/lib/languages/c';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.min.css';

import Logger from '../../Logger/Logger';

import { useCodeBlockStyles } from './Medias.styles';

hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('c', c);
hljs.registerLanguage('typescript', typescript);

const childLog = Logger.child('CodeBlockCard');

export interface CodeBlockCardProps {
  readonly value: ICodeBlock;
}

const CodeBlockCard: FC<CodeBlockCardProps> = memo(({ value }) => {
  const [html, setHtml] = useState<string>();
  const classes = useCodeBlockStyles();

  useEffect(() => {
    if (value.language) {
      try {
        setHtml(
          hljs.highlight(value.codeSnippet || 'null', {
            language: value.language,
          }).value
        );
        return;
      } catch {
        childLog.error('Error highlighting code block', value);
      }
    }

    setHtml(hljs.highlightAuto(value.codeSnippet || 'null').value);
  }, [value]);

  if (!html) {
    return <pre className={classes.codeBlock}>{value.codeSnippet}</pre>;
  }

  return <pre className={classes.codeBlock} dangerouslySetInnerHTML={{ __html: html }} />;
});

CodeBlockCard.displayName = 'CodeBlockCard';

export default CodeBlockCard;
