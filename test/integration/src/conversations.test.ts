import { getFixture, TestFixture } from './fixture';

describe('Conversations', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should create a 1:1 conversation', async () => {
    const response = await f.api.conversations.create({
      tenantId: f.config.tenantId,
      isGroup: false,
      members: [{ id: f.memberMri1, name: 'Test User', role: 'user' }],
      activity: {
        type: 'message',
        text: `[TS Integration] 1:1 conversation test at ${new Date().toISOString()}`,
      },
    });

    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });

  it('should create a group conversation', async () => {
    if (!f.memberMri2) return; // Need at least 2 members

    const response = await f.api.conversations.create({
      tenantId: f.config.tenantId,
      bot: { id: `28:${f.config.clientId}`, name: 'Bot', role: 'bot' },
      members: [
        { id: f.memberMri2, name: 'User 2', role: 'user' },
      ],
      channelData: { tenant: { id: f.config.tenantId } },
      activity: {
        type: 'message',
        text: `[TS Integration] Group conversation test at ${new Date().toISOString()}`,
      },
    });

    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });
});
