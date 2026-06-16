import { getFixture, TestFixture } from './fixture';

describe('Activities', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should send a message activity', async () => {
    const response = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: `[TS Integration] Send test at ${new Date().toISOString()}`,
      });

    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });

  it('should send and update an activity', async () => {
    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: `[TS Integration] Update test — original`,
      });

    expect(sent?.id).toBeDefined();

    await f.api.conversations
      .activities(f.config.conversationId)
      .update(sent.id!, {
        type: 'message',
        text: `[TS Integration] Update test — updated at ${new Date().toISOString()}`,
      });
  });

  it('should send and delete an activity', async () => {
    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: `[TS Integration] Delete test — will be removed`,
      });

    expect(sent?.id).toBeDefined();

    await f.api.conversations
      .activities(f.config.conversationId)
      .delete(sent.id!);
  });

  it('should send a reply to an activity', async () => {
    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: `[TS Integration] Reply test — parent`,
      });

    const reply = await f.api.conversations
      .activities(f.config.conversationId)
      .reply(sent.id!, {
        type: 'message',
        text: `[TS Integration] Reply test — child at ${new Date().toISOString()}`,
      });

    expect(reply).toBeDefined();
    expect(reply.id).toBeDefined();
  });
});
