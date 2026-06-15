import { IHtmlWidgetPayload } from '@microsoft/teams.api';

/**
 * Options for building an HTML widget markdown string.
 */
export interface IHtmlWidgetMarkdownOptions {
  /**
   * Text to include before the widget code block.
   */
  before?: string;

  /**
   * Text to include after the widget code block.
   */
  after?: string;
}

/**
 * Wraps an HTML widget payload in the ```html-widget markdown code fence format.
 *
 * @param payload - The widget payload to serialize.
 * @param options - Optional text to include before/after the widget block.
 * @returns The markdown string containing the widget code block.
 */
export function buildHtmlWidgetMarkdown(
  payload: IHtmlWidgetPayload,
  options?: IHtmlWidgetMarkdownOptions
): string {
  const json = JSON.stringify(payload);
  const parts: string[] = [];

  if (options?.before) {
    parts.push(options.before, '');
  }

  parts.push('```html-widget', json, '```');

  if (options?.after) {
    parts.push('', options.after);
  }

  return parts.join('\n');
}

/**
 * Builds a message activity containing an HTML widget, ready to be sent.
 *
 * @param payload - The widget payload to include in the message.
 * @param options - Optional text to include before/after the widget block.
 * @returns An activity object with textFormat set to 'extendedmarkdown'.
 */
export function buildHtmlWidgetMessage(
  payload: IHtmlWidgetPayload,
  options?: IHtmlWidgetMarkdownOptions
): { type: 'message'; text: string; textFormat: 'extendedmarkdown' } {
  return {
    type: 'message',
    text: buildHtmlWidgetMarkdown(payload, options),
    textFormat: 'extendedmarkdown',
  };
}
