import { useEffect, useState } from 'react';
import { ICodeBlock } from '@microsoft/spark.cards';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import c from 'highlight.js/lib/languages/c';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.min.css';

hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('c', c);
hljs.registerLanguage('typescript', typescript);

export interface CodeBlockCardProps {
  readonly value: ICodeBlock;
}

export default function CodeBlockCard({ value }: CodeBlockCardProps) {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    if (value.language) {
      try {
        setHtml(hljs.highlight(value.codeSnippet || 'null', { language: value.language }).value);
        return;
      } catch {}
    }

    setHtml(hljs.highlightAuto(value.codeSnippet || 'null').value);
  }, [value]);

  if (!html) {
    return <pre className="text-xs bg-black p-2 rounded" />;
  }

  return (
    <pre className="text-xs bg-black p-2 rounded" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
