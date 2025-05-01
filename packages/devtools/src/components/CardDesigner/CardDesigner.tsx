import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  ActionSet,
  AdaptiveCard,
  CardElement,
  IAdaptiveCard,
  Icon,
  TextBlock,
} from '@microsoft/teams.cards';
import estree from 'prettier/plugins/estree';
import parserTypeScript from 'prettier/plugins/typescript';
import prettier from 'prettier/standalone';

import { useCardDesignerClasses } from './CardDesigner.styles';
import CardDesignerContent from './CardDesignerContent';
import CardDesignerEditor from './CardDesignerEditor';
import CardDesignerSidebar from './CardDesignerSidebar';

export interface CardDesignerProps {
  readonly value?: IAdaptiveCard;
  readonly onChange?: (value: IAdaptiveCard) => void;
}

const placeholderCard = new AdaptiveCard(
  new Icon('Warning'),
  new TextBlock('Use this site instead of this Cards editor page:', {
    wrap: true,
    style: 'heading',
  }),
  new ActionSet({
    type: 'Action.OpenUrl',
    title: 'Adaptive Cards Designer',
    url: 'https://adaptivecards.microsoft.com/designer',
  })
);

const CardDesigner: FC<CardDesignerProps> = memo(({ value, onChange }) => {
  const classes = useCardDesignerClasses();
  const [card, setCard] = useState<IAdaptiveCard>(value || new AdaptiveCard());
  const [typescript, setTypescript] = useState<string>();
  const [formatted, setFormatted] = useState<string>();
  const isUpdatingRef = useRef(false);
  const isAddingElementRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onChange) return;
    onChange(card);
  }, [card, onChange]);

  useEffect(() => {
    setCard(placeholderCard);
    setTypescript(`Icon('Warning'),
  TextBlock("Use this site instead of this Cards editor page", {
    wrap: true,
    style: "heading"
  }),
  ActionSet([
    {
      type: "Action.OpenUrl",
      title: "Adaptive Cards Designer",
      url: "https://adaptivecards.microsoft.com/designer"
    }
  ])`);
  }, []);

  useEffect(() => {
    (async () => {
      if (!typescript) return;
      const pretty = await prettier.format(`Card([${typescript}]);`, {
        parser: 'typescript',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        plugins: [parserTypeScript, estree],
      });

      setFormatted(pretty);
    })();
  }, [typescript]);

  // Expose the card data for the Attach button
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).__CARD_DESIGNER__ = { card };
    }
  }, [card]);

  const onSelect = useCallback((el: CardElement, ts: string) => {
    // Prevent duplicate additions
    if (isAddingElementRef.current) return;
    isAddingElementRef.current = true;

    try {
      setCard((prevCard) => {
        const newCard = { ...prevCard };
        if (!newCard.body) {
          newCard.body = [];
        }
        newCard.body = [...newCard.body, el];
        return newCard;
      });

      setTypescript((prevTs) => {
        // If previous TypeScript is empty or contains [object Object], replace it
        if (!prevTs || prevTs.includes('[object Object]')) {
          return ts;
        }
        // Otherwise append the new TypeScript
        return [prevTs, ts].filter((v) => !!v).join(',\n  ');
      });
    } finally {
      // Use setTimeout to ensure this runs after state updates are processed
      setTimeout(() => {
        isAddingElementRef.current = false;
      }, 0);
    }
  }, []);

  const onEditorUpdate = useCallback((updatedCard: IAdaptiveCard) => {
    isUpdatingRef.current = true;
    setCard(updatedCard);
    // Allow other effects to run before clearing the flag
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 0);
  }, []);

  return (
    <div className={classes.container} ref={containerRef} data-testid="card-designer">
      <CardDesignerSidebar onSelect={onSelect} />
      <CardDesignerContent value={card} />
      <CardDesignerEditor value={card} typescript={formatted} onChange={onEditorUpdate} />
    </div>
  );
});

CardDesigner.displayName = 'CardDesigner';

export default CardDesigner;
