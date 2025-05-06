import { FC, memo, useCallback, useState } from 'react';
import { Button, Title3 } from '@fluentui/react-components';
import {
  AddFilled,
  BadgeRegular,
  CheckboxUncheckedRegular,
  CodeRegular,
  ColumnTripleRegular,
  DocumentOnePageColumnsRegular,
  FilmstripPlayRegular,
  FluentIcon,
  ImageRegular,
  InfoRegular,
  TableImageRegular,
  TableLightningRegular,
  TableRegular,
  TextFontSizeRegular,
  TextWordCountRegular,
} from '@fluentui/react-icons/lib/fonts';
import {
  ActionSet,
  Badge,
  CodeBlock,
  ColumnSet,
  Container,
  CardElement,
  Fact,
  FactSet,
  Icon,
  Image,
  ImageSet,
  Media,
  RichTextBlock,
  TextBlock,
} from '@microsoft/teams.cards';

import { useCardDesignerSidebarClasses } from './CardDesignerSidebar.styles';

export interface CardDesignerSidebarProps {
  readonly onSelect?: (el: CardElement, ts: string) => void;
}

interface CardGroup {
  readonly label: string;
  readonly cards: {
    readonly icon?: FluentIcon;
    readonly label: string;
    readonly value: CardElement;
    readonly typescript: string;
  }[];
}

const groups: CardGroup[] = [
  {
    label: 'Containers',
    cards: [
      {
        icon: TableLightningRegular as FluentIcon,
        label: 'ActionSet',
        value: new ActionSet(
          {
            type: 'Action.OpenUrl',
            title: 'Action.OpenUrl',
            url: 'https://microsoft.com',
          },
          {
            type: 'Action.Submit',
            title: 'Action.Submit',
          }
        ),
        typescript: 'ActionSet()',
      },
      {
        icon: ColumnTripleRegular as FluentIcon,
        label: 'ColumnSet',
        value: new ColumnSet(),
        typescript: 'ColumnSet()',
      },
      {
        icon: CheckboxUncheckedRegular as FluentIcon,
        label: 'Container',
        value: new Container(),
        typescript: 'Container()',
      },
      {
        icon: DocumentOnePageColumnsRegular as FluentIcon,
        label: 'FactSet',
        value: new FactSet(new Fact('hello', 'world')),
        typescript: 'FactSet([Fact("hello", "world")])',
      },
      {
        icon: TableImageRegular as FluentIcon,
        label: 'ImageSet',
        value: new ImageSet(
          new Image(
            'https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true',
            {
              size: 'Medium',
            }
          ),
          new Image(
            'https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true',
            {
              size: 'Medium',
            }
          )
        ),
        typescript: [
          'ImageSet([',
          '\tImage("https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true", { size: "medium" }),',
          '\tImage("https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true"), {size: "medium" }',
          '])',
        ].join('\n'),
      },
      {
        icon: TableRegular as FluentIcon,
        label: 'Table',
        value: new ImageSet(),
        typescript: 'ImageSet()',
      },
    ],
  },
  {
    label: 'Media',
    cards: [
      {
        icon: BadgeRegular as FluentIcon,
        label: 'Badge',
        value: new Badge({
          style: 'Attention',
          icon: 'Warning',
          text: 'an error badge example...',
          shape: 'Rounded',
          size: 'ExtraLarge',
        }),
        typescript: [
          'Badge({',
          '\tstyle: "attention",',
          '\ticon: "Warning",',
          '\ttext: "an error badge example...",',
          '\tshape: "rounded",',
          '\tsize: "extraLarge"',
          '})',
        ].join('\n'),
      },
      {
        icon: CodeRegular as FluentIcon,
        label: 'CodeBlock',
        value: new CodeBlock({
          codeSnippet: 'const helloWorld = () => console.log("hello, world!");',
          language: 'TypeScript',
        }),
        typescript: [
          'CodeBlock({',
          '\tcodeSnippet: "const helloWorld = () => console.log(\'hello, world!\');",',
          '\tlanguage: "TypeScript"',
          '})',
        ].join('\n'),
      },
      {
        icon: InfoRegular as FluentIcon,
        label: 'Icon',
        value: new Icon('Info'),
        typescript: 'Icon("Info")',
      },
      {
        icon: ImageRegular as FluentIcon,
        label: 'Image',
        value: new Image(
          'https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true',
          { size: 'Medium' }
        ),
        typescript:
          'Image("https://github.com/microsoft/teams.ts/blob/main/assets/icons/teams.png?raw=true", { size: "medium"} )',
      },
      {
        icon: FilmstripPlayRegular as FluentIcon,
        label: 'Media',
        value: new Media(),
        typescript: 'Media()',
      },
      {
        icon: TextWordCountRegular as FluentIcon,
        label: 'RichTextBlock',
        value: new RichTextBlock(),
        typescript: 'RichTextBlock()',
      },
      {
        icon: TextFontSizeRegular as FluentIcon,
        label: 'TextBlock',
        value: new TextBlock('hello world!'),
        typescript: 'TextBlock("hello world!")',
      },
    ],
  },
];

const CardDesignerSidebar: FC<CardDesignerSidebarProps> = memo(({ onSelect }) => {
  const classes = useCardDesignerSidebarClasses();
  const [isClickDisabled, setIsClickDisabled] = useState(false);

  const handleCardClick = useCallback(
    (card: { value: CardElement; typescript: string }) => {
      if (!onSelect || isClickDisabled) return;

      // Disable clicking temporarily to prevent double-clicks
      setIsClickDisabled(true);

      // Call the onSelect handler
      onSelect(card.value, card.typescript);

      // Re-enable clicking after a short delay
      setTimeout(() => {
        setIsClickDisabled(false);
      }, 300); // 300ms should be enough to prevent accidental double-clicks
    },
    [onSelect, isClickDisabled]
  );

  return (
    <div className={classes.container}>
      {groups.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className={classes.group}>
          <Title3>{group.label}</Title3>

          {group.cards.map((card, cardIndex) => {
            return (
              <Button
                appearance="transparent"
                key={`card-${groupIndex}-${cardIndex}`}
                onClick={() => handleCardClick(card)}
                disabled={isClickDisabled}
                icon={card.icon && <card.icon />}
              >
                {card.label}
                <AddFilled className={classes.addIcon} />
              </Button>
            );
          })}
        </div>
      ))}
    </div>
  );
});

CardDesignerSidebar.displayName = 'CardDesignerSidebar';

export default CardDesignerSidebar;
