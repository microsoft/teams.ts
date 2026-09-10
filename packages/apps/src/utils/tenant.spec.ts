import { Activity, MessageActivity } from '@microsoft/teams.api';

import { extractTenantId } from './tenant';

describe('extractTenantId', () => {
  const activityWith = (patch: Partial<Activity>) =>
    Object.assign(new MessageActivity('hi'), patch) as Activity;

  it('prefers the conversation tenant', () => {
    const activity = activityWith({
      conversation: { id: 'c1', conversationType: 'personal', tenantId: 'from-conversation' } as any,
      channelData: { tenant: { id: 'from-channel-data' } },
    });

    expect(extractTenantId(activity)).toBe('from-conversation');
  });

  // The regression this guards: reading only `conversation.tenantId` silently drops the tenant on activities that carry it on channel data, which is why Python has the same fallback.
  it('falls back to the channel data tenant', () => {
    const activity = activityWith({
      conversation: { id: 'c1', conversationType: 'personal' } as any,
      channelData: { tenant: { id: 'from-channel-data' } },
    });

    expect(extractTenantId(activity)).toBe('from-channel-data');
  });

  it('treats an empty conversation tenant as absent', () => {
    const activity = activityWith({
      conversation: { id: 'c1', conversationType: 'personal', tenantId: '' } as any,
      channelData: { tenant: { id: 'from-channel-data' } },
    });

    expect(extractTenantId(activity)).toBe('from-channel-data');
  });

  it('is undefined when neither source has one', () => {
    const activity = activityWith({
      conversation: { id: 'c1', conversationType: 'personal' } as any,
    });

    expect(extractTenantId(activity)).toBeUndefined();
  });
});
