import { useEffect, useRef, useState } from 'react';
import { ICard } from '@microsoft/spark.cards';
import { SelectTabEvent, SelectTabData, Tab, TabList, TabValue } from '@fluentui/react-components';
import { json } from '@codemirror/lang-json';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
import { atomone } from '@uiw/codemirror-themes-all';
import { EditorView, basicSetup } from 'codemirror';

import { useCardDesignerEditorClasses } from './CardDesignerEditor.styles';
import { useLogger } from '../../contexts/LoggerContext';

export interface CardDesignerEditorProps {
  readonly value?: ICard;
  readonly typescript?: string;
  readonly onChange?: (value: ICard) => void;
}

export default function CardDesignerEditor({
  value,
  typescript,
  onChange,
}: CardDesignerEditorProps) {
  const classes = useCardDesignerEditorClasses();
  const [selectedValue, setSelectedValue] = useState<TabValue>('json');

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  return (
    <div className={classes.tabGroup}>
      <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
        <Tab id="json" value="json">
          Json
        </Tab>
        <Tab id="typescript" value="typescript">
          Typescript
        </Tab>
      </TabList>
      <div className={classes.tabPanels}>
        {selectedValue === 'json' && (
          <div role="tabpanel" aria-labelledby="json" className={classes.tabPanel}>
            <CardDesignerJsonEditor value={value} onChange={onChange} />
          </div>
        )}
        {selectedValue === 'typescript' && (
          <div role="tabpanel" aria-labelledby="typescript" className={classes.tabPanel}>
            <CardDesignerTypescriptEditor value={typescript} />
          </div>
        )}
      </div>
    </div>
  );
}

export interface CardDesignerJsonEditorProps {
  readonly value?: ICard;
  readonly onChange?: (value: ICard) => void;
}

export function CardDesignerJsonEditor({ value, onChange }: CardDesignerJsonEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const classes = useCardDesignerEditorClasses();
  const [isUpdating, setIsUpdating] = useState(false);
  const log = useLogger();
  const childLog = log.child('CardDesignerJsonEditor');

  // Helper function with access to logger
  const tryParseJson = (value: string) => {
    try {
      // creates new object every time
      return JSON.parse(value);
    } catch (err) {
      childLog.warn('Failed to parse JSON:', err);
      return null;
    }
  };

  // Initialize the editor once
  useEffect(() => {
    if (!ref.current || viewRef.current) return;

    const view = new EditorView({
      parent: ref.current,
      state: EditorState.create({
        doc: value ? JSON.stringify(value, null, 2) : undefined,
        extensions: [
          basicSetup,
          atomone,
          json(),
          EditorView.updateListener.of((update: ViewUpdate) => {
            if (!update.docChanged || !onChange || isUpdating) return;

            try {
              const card = JSON.parse(update.state.doc.toString());
              onChange(card);
            } catch (err) {
              childLog.error(err);
            }
          }),
        ],
      }),
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [ref]);

  // Update the editor content when value changes
  useEffect(() => {
    if (!viewRef.current || !value) return;

    const currentContent = viewRef.current.state.doc.toString();
    const parsedDoc = tryParseJson(currentContent);

    if (parsedDoc && JSON.stringify(parsedDoc) === JSON.stringify(value)) return;

    setIsUpdating(true);
    viewRef.current.dispatch({
      changes: {
        from: 0,
        to: viewRef.current.state.doc.length,
        insert: JSON.stringify(value, null, 2),
      },
    });
    setIsUpdating(false);
  }, [value]);

  return <div ref={ref} className={classes.cardDesignerEditor} />;
}

export interface CardDesignerTypescriptEditorProps {
  readonly value?: string;
}

export function CardDesignerTypescriptEditor({ value }: CardDesignerTypescriptEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const classes = useCardDesignerEditorClasses();
  const [isUpdating, setIsUpdating] = useState(false);
  const log = useLogger();
  const childLog = log.child('CardDesignerTypescriptEditor');

  // Initialize the editor once
  useEffect(() => {
    if (!ref.current || viewRef.current) return;

    const view = new EditorView({
      parent: ref.current,
      state: EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          atomone,
          javascript({ typescript: true }),
          EditorState.readOnly.of(true),
        ],
      }),
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [ref]);

  useEffect(() => {
    if (!viewRef.current || !value || isUpdating) return;

    if (viewRef.current.state.doc.toString() === value) return;

    try {
      setIsUpdating(true);
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: value,
        },
      });
    } catch (err) {
      childLog.error('Failed to update TypeScript editor content:', err);
    } finally {
      setIsUpdating(false);
    }
  }, [value]);

  return <div ref={ref} className={classes.cardDesignerEditor} />;
}
