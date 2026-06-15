import { getFixture, TestFixture } from './fixture';

describe('Members', () => {
  let f: TestFixture;

  beforeAll(async () => {
    f = await getFixture();
  });

  it('should get conversation members', async () => {
    const members = await f.api.conversations.members(f.config.conversationId).get();

    expect(members).toBeDefined();
    expect(members.length).toBeGreaterThan(0);
    expect(members[0].id).toBeDefined();
  });

  it('should get a single member by ID', async () => {
    const member = await f.api.conversations
      .members(f.config.conversationId)
      .getById(f.memberMri1);

    expect(member).toBeDefined();
    expect(member.id).toBe(f.memberMri1);
  });

  it('should get paged members', async () => {
    if (f.isCanary) return; // Paged members returns empty on canary

    const paged = await f.api.conversations
      .members(f.config.conversationId)
      .getPaged(2);

    expect(paged).toBeDefined();
    expect(paged.members).toBeDefined();
    expect(paged.members.length).toBeGreaterThan(0);
  });
});
