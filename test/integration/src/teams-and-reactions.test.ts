import { getFixture, TestFixture } from './fixture';

describe('Teams', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should get team details', async () => {
    const details = await f.api.teams.getById(f.config.teamId);

    expect(details).toBeDefined();
    expect(details.id).toBeDefined();
  });

  it('should get team channels', async () => {
    const channels = await f.api.teams.getConversations(f.config.teamId);

    expect(channels).toBeDefined();
    expect(channels.length).toBeGreaterThan(0);
    expect(channels[0].id).toBeDefined();
  });
});

describe('Reactions', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should add and remove a reaction', async () => {
    if (f.isCanary) return; // Reactions return 404 on canary
    if (f.isAgentic) return; // Reactions return 404 with agentic identity

    // Send a message to react to
    const sent = await f.api.conversations
      .activities(f.config.conversationId)
      .create({
        type: 'message',
        text: `[TS Integration] Reaction test at ${new Date().toISOString()}`,
      });

    expect(sent?.id).toBeDefined();

    // Add reaction
    await f.api.conversations.addReaction(
      f.config.conversationId,
      sent.id!,
      'like'
    );

    // Remove reaction
    await f.api.conversations.deleteReaction(
      f.config.conversationId,
      sent.id!,
      'like'
    );
  });
});
