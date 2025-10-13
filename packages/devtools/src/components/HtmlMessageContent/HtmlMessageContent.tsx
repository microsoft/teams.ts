import React from 'react';
import { parseDocument } from 'htmlparser2';

import { useClasses } from './HtmlMessageContent.styles';

interface Props {
  content: string;
}

// htmlparser2 lower-cases attribute names while parsing
type LowercaseProps<T> = {
  [K in keyof T as K extends string ? Lowercase<K> : never]?: T[K];
};
type HTMLElementAttributes =LowercaseProps<React.HTMLAttributes<HTMLElement>>;

// these are attributes that we don't want to render on any of the nodes, because they either irrelevant
// or problematic. E.g. className & style can break rendering; while the item* ones are irrelevant and 
// React really don't like how they're just lower-case.
const omitAttributes : Readonly<string[]> = ['class', 'classname', 'itemid', 'itemprop', 'itemscope', 'itemtype', 'style'];

// this map captures the fixed set of attributes that must be applied to certain tags
const fixedAttributeMap : Record<string, Readonly<Record<string, string>>> = {
    'a':
       {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
};

// generates child content based on itemProp, if applicable
const getChildContent = ({ children,  itemprop, itemid } : HTMLElementAttributes) => {
  switch (itemprop) {
    case 'time': {
        const date = new Date(Number(itemid ?? ''));
        // In the dev tools, this attribute might contain an activity guid rather than a timestamp.
        // No biggie, let's just fall back on the current time.
        return isNaN(date.getTime()) ? (new Date().toLocaleString()) : (date.toLocaleString());
    }
    default:
      return children;
  }
}

// adjusts the attributes that are rendered for each tag - either clean up gunk, or add mandatory attributes.
const getEffectiveAttributes = ({name, attribs } : {name: string, attribs: Record<string, any>}) => {
  // remove attributes that irrelevant or problematic.
  const effectiveAttributes = Object.fromEntries(
    Object.entries(attribs).filter(([key]) => !omitAttributes.includes(key))
  );

  // add any fixed attributes for the tag
  const fixedAttributes = fixedAttributeMap[name];
  return !fixedAttributes ? effectiveAttributes : {...effectiveAttributes, ...fixedAttributes};
}

const renderNode = (node: any, key: number = 0): React.ReactNode => {
  if (node.type === 'text')  {
    return <span key={key}>{node.data}</span>;
  }

  if (node.type === 'tag') {
    const childNodes = (node.children?.map((child: any, i: number) => renderNode(child, i)));
    const children = getChildContent({ ...node.attribs, children: childNodes});
    const attribs = getEffectiveAttributes(node);

    switch (node.name) {
      case 'a':
      case 'b':
      case 'blockquote':
      case 'code':
      case 'div':
      case 'em':
      case 'i':
      case 'li':
      case 'ol':
      case 'p':
      case 'pre':
      case 's':
      case 'span':
      case 'strong':
      case 'u':
      case 'ul':
        {
          const Component = node.name;
          return <Component key={key} {...attribs}>{children}</Component>;
        }
      case 'br':
        case 'img':
        {
          const Component = node.name;
          return <Component key={key} {...attribs} />;
        }
      default:
        return <span key={key} {...attribs}>{children}</span>;
    }
  }

  return null;
};

const HtmlMessageContent = React.memo(function HtmlMessageContent ({ content }: Props)  {
  const classes = useClasses();

  // Respect \r\n and \n as line breaks
  const processedContent = content.replace(/\r?\n/g, '<br />');

  const dom = parseDocument(processedContent, { });
  const body = dom.children || [];
  return <div className={classes.contentContainer} >{body.map((node, i) => renderNode(node, i))}</div>;
});

export default HtmlMessageContent;