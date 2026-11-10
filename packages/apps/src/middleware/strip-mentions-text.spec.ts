import { Account, Activity, MessageActivity } from '@microsoft/teams.api';

import { stripMentionsText } from './strip-mentions-text';

describe('stripMentionsText middleware', () => {
  const bot: Account = { id: 'bot-id', name: 'GitHub', role: 'bot' };
  const alice: Account = { id: 'alice-id', name: 'Alice', role: 'user' };

  const createActivity = (text: string, recipient: Account = bot) => {
    const activity = new MessageActivity(text)
      .withRecipient(recipient)
      .withFrom({ id: 'user-id', name: 'user', role: 'user' });

    activity.entities = [
      { type: 'mention', text: '<at>GitHub</at>', mentioned: bot },
      { type: 'mention', text: '<at>Alice</at>', mentioned: alice },
    ];

    return activity;
  };

  const run = async (middleware: ReturnType<typeof stripMentionsText>, activity: Activity) => {
    const next = jest.fn();
    await middleware({ activity, next } as any);
    expect(next).toHaveBeenCalledTimes(1);
    return activity;
  };

  it('should remove all mentions by default', async () => {
    const activity = await run(
      stripMentionsText(),
      createActivity('<at>GitHub</at> help <at>Alice</at>')
    );

    expect((activity as MessageActivity).text).toEqual('help');
  });

  it('should remove only the recipient mention when recipient is true', async () => {
    const activity = await run(
      stripMentionsText({ recipient: true }),
      createActivity('<at>GitHub</at> help <at>Alice</at>')
    );

    expect((activity as MessageActivity).text).toEqual('help <at>Alice</at>');
  });

  it('should preserve a later recipient mention with leadingOnly', async () => {
    const activity = await run(
      stripMentionsText({ recipient: true, leadingOnly: true }),
      createActivity('<at>GitHub</at> ask <at>GitHub</at> and <at>Alice</at>')
    );

    expect((activity as MessageActivity).text).toEqual('ask <at>GitHub</at> and <at>Alice</at>');
  });

  it('should use the recipient of each activity', async () => {
    const middleware = stripMentionsText({ recipient: true });
    const activity = await run(
      middleware,
      createActivity('<at>GitHub</at> help <at>Alice</at>', alice)
    );

    expect((activity as MessageActivity).text).toEqual('<at>GitHub</at> help');
  });

  it('should prefer recipient over accountId', async () => {
    const activity = await run(
      stripMentionsText({ recipient: true, accountId: 'alice-id' }),
      createActivity('<at>GitHub</at> help <at>Alice</at>')
    );

    expect((activity as MessageActivity).text).toEqual('help <at>Alice</at>');
  });

  it('should ignore activities without text', async () => {
    const activity = { type: 'invoke', name: 'test' } as unknown as Activity;
    await run(stripMentionsText({ recipient: true }), activity);

    expect(activity).toEqual({ type: 'invoke', name: 'test' });
  });
});
