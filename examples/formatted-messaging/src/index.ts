import { MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import { ConsoleLogger } from '@microsoft/teams.common';

const app = new App({
  logger: new ConsoleLogger('@examples/formatted-messaging', { level: 'debug' }),
});

app.on('message', async ({ reply, activity }) => {
  await reply({ type: 'typing' });
  const text = activity.text.toLowerCase();

  if (text.includes('extended')) {
    const richContent = [
      '# Extended Markdown Demo',
      '',
      '## Table',
      '| Feature | Status |',
      '|---------|--------|',
      '| Tables  | Supported |',
      '| Math    | Supported |',
      '',
      '## Math',
      '$$E = mc^2$$',
    ].join('\n');

    await reply(
      new MessageActivity(richContent).withTextFormat('extendedmarkdown')
    );
  } else if (text.includes('markdown')) {
    const markdownContent = [
      '# Markdown Demo',
      '',
      '**Bold**, *italic*, and ~~strikethrough~~',
      '',
      '- Item one',
      '- Item two',
      '- Item three',
      '',
      '> This is a blockquote',
      '',
      '`inline code` and [a link](https://www.microsoft.com)',
    ].join('\n');

    await reply(
      new MessageActivity(markdownContent).withTextFormat('markdown')
    );
  } else if (text.includes('xml')) {
    const xmlContent =
      '<b>Bold</b>, <i>italic</i>, and <strike>strikethrough</strike><br/>' +
      '<ul><li>Item one</li><li>Item two</li><li>Item three</li></ul>';

    await reply(
      new MessageActivity(xmlContent).withTextFormat('xml')
    );
  } else if (text.includes('plain')) {
    await reply(
      new MessageActivity('This is plain text with no formatting applied.').withTextFormat('plain')
    );
  } else {
    await reply(
      'Send **markdown**, **extended**, **xml**, or **plain** to see different text formats.'
    );
  }
});

app.start().catch(console.error);
