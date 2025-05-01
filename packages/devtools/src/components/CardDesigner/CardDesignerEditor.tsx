import { FC, memo, useEffect, useRef, useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { EditorState } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
import { SelectTabData, SelectTabEvent, Tab, TabList, TabValue } from '@fluentui/react-components';
import { IAdaptiveCard } from '@microsoft/teams.cards';
import { atomone } from '@uiw/codemirror-themes-all';
import { basicSetup, EditorView } from 'codemirror';

import Logger from '../../components/Logger/Logger';

import { useCardDesignerEditorClasses } from './CardDesignerEditor.styles';

const jsonEditorLog = Logger.child('CardDesignerJsonEditor');
const typescriptEditorLog = Logger.child('CardDesignerTypescriptEditor');

export interface CardDesignerEditorProps {
  readonly value?: IAdaptiveCard;
  readonly typescript?: string;
  readonly onChange?: (value: IAdaptiveCard) => void;
}

const CardDesignerEditor: FC<CardDesignerEditorProps> = memo(({ value, typescript, onChange }) => {
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
});

export interface CardDesignerJsonEditorProps {
  readonly value?: IAdaptiveCard;
  readonly onChange?: (value: IAdaptiveCard) => void;
}

const CardDesignerJsonEditor: FC<CardDesignerJsonEditorProps> = memo(({ value, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const classes = useCardDesignerEditorClasses();
  const [isUpdating, setIsUpdating] = useState(false);

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
              jsonEditorLog.error(err);
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
  }, [ref, isUpdating, onChange, value]);

  useEffect(() => {
    const tryParseJson = (value: string) => {
      try {
        return JSON.parse(value);
      } catch (err) {
        jsonEditorLog.warn('Failed to parse JSON:', err);
        return null;
      }
    };

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
});

export interface CardDesignerTypescriptEditorProps {
  readonly value?: string;
}

const CardDesignerTypescriptEditor: FC<CardDesignerTypescriptEditorProps> = memo(({ value }) => {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const classes = useCardDesignerEditorClasses();
  const [isUpdating, setIsUpdating] = useState(false);

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
  }, [ref, value]);

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
      typescriptEditorLog.error('Failed to update TypeScript editor content:', err);
    } finally {
      setIsUpdating(false);
    }
  }, [isUpdating, value]);

  return <div ref={ref} className={classes.cardDesignerEditor} />;
});

CardDesignerEditor.displayName = 'CardDesignerEditor';
CardDesignerJsonEditor.displayName = 'CardDesignerJsonEditor';
CardDesignerTypescriptEditor.displayName = 'CardDesignerTypescriptEditor';

export default CardDesignerEditor;
