import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';

export function hasMarkdownContent(content: string): boolean {
  // Parse the content to check for markdown syntax
  const tree = fromMarkdown(content, {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });

  // Check if there are any non-text nodes (indicating markdown syntax)
  return tree.children.some(
    (node) => node.type !== 'paragraph' || node.children.some((child) => child.type !== 'text')
  );
}
