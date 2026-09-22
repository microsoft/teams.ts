import { IMeetingEndEventActivity } from './meeting-end';
import { IMeetingStartEventActivity } from './meeting-start';

const TENANT_ID = '00000000-0000-0000-0000-000000000001';
const APP_ID = '00000000-0000-0000-0000-000000000002';
const MEETING_ID =
  'MCMxOTpPOThDcWI2UHJIVExzMUB0aHJlYWQudGFjdjIjMTc4OTY2NjYwODA4MA==';

/**
 * Captured from a live meeting held inside a channel on 2026-09-17.
 * `JoinUrl` is null because a channel meeting has no join link, and `StartTime` is an extra field the end event does not model.
 */
const CHANNEL_MEETING_END_PAYLOAD = `{
  "MeetingType": "",
  "Title": "Meeting in \\"General\\" ",
  "Id": "${MEETING_ID}",
  "JoinUrl": null,
  "StartTime": null,
  "EndTime": "2026-09-17T17:40:13.081877Z"
}`;

const CHANNEL_MEETING_START_PAYLOAD = `{
  "MeetingType": "",
  "Title": "Meeting in \\"General\\" ",
  "Id": "${MEETING_ID}",
  "JoinUrl": null,
  "StartTime": "2026-09-17T17:10:02.000000Z"
}`;

const baseActivity = {
  type: 'event',
  id: 'activity-id',
  timestamp: new Date('2026-09-17T17:40:13Z'),
  serviceUrl: 'https://smba.trafficmanager.net/amer/',
  channelId: 'msteams',
  from: { id: 'user-id', name: 'Test User', role: 'user', tenantId: TENANT_ID },
  conversation: { id: 'conversation-id', conversationType: 'channel', tenantId: TENANT_ID },
  recipient: { id: APP_ID, name: 'Test Bot', role: 'bot' },
  channelData: { tenant: { id: TENANT_ID } },
  channel: undefined,
  team: undefined,
  meeting: undefined,
  notification: undefined,
  isStreaming: () => false,
} as const;

describe('meeting event activities', () => {
  describe('IMeetingStartEventActivity', () => {
    it('models a channel meeting, which carries no join url', () => {
      const activity: IMeetingStartEventActivity = {
        ...baseActivity,
        name: 'application/vnd.microsoft.meetingStart',
        value: {
          Id: MEETING_ID,
          MeetingType: '',
          Title: 'Meeting in "General" ',
          StartTime: new Date('2026-09-17T17:10:02Z'),
        },
      };

      expect(activity.value.JoinUrl).toBeUndefined();
      expect(activity.value.Title).toEqual('Meeting in "General" ');
    });

    it('still models a scheduled meeting, which does carry a join url', () => {
      const activity: IMeetingStartEventActivity = {
        ...baseActivity,
        name: 'application/vnd.microsoft.meetingStart',
        value: {
          Id: MEETING_ID,
          MeetingType: 'Scheduled',
          Title: 'Weekly sync',
          JoinUrl: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_id%40thread.v2/0',
          StartTime: new Date('2026-09-17T17:10:02Z'),
        },
      };

      expect(activity.value.JoinUrl).toEqual(
        'https://teams.microsoft.com/l/meetup-join/19%3ameeting_id%40thread.v2/0'
      );
    });

    it('reads a live channel meeting payload without producing a string join url', () => {
      const value = JSON.parse(CHANNEL_MEETING_START_PAYLOAD);

      expect(value.JoinUrl).toBeNull();
      expect(typeof value.JoinUrl).not.toEqual('string');
      // Inbound activities are cast rather than normalized, so null survives to the handler and only a truthiness check covers it.
      expect(value.JoinUrl ? 'present' : 'absent').toEqual('absent');
    });
  });

  describe('IMeetingEndEventActivity', () => {
    it('models a channel meeting, which carries no join url', () => {
      const activity: IMeetingEndEventActivity = {
        ...baseActivity,
        name: 'application/vnd.microsoft.meetingEnd',
        value: {
          Id: MEETING_ID,
          MeetingType: '',
          Title: 'Meeting in "General" ',
          EndTime: new Date('2026-09-17T17:40:13.081877Z'),
        },
      };

      expect(activity.value.JoinUrl).toBeUndefined();
      expect(activity.value.EndTime.toISOString()).toEqual('2026-09-17T17:40:13.081Z');
    });

    it('still models a scheduled meeting, which does carry a join url', () => {
      const activity: IMeetingEndEventActivity = {
        ...baseActivity,
        name: 'application/vnd.microsoft.meetingEnd',
        value: {
          Id: MEETING_ID,
          MeetingType: 'Scheduled',
          Title: 'Weekly sync',
          JoinUrl: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_id%40thread.v2/0',
          EndTime: new Date('2026-09-17T17:40:13.081877Z'),
        },
      };

      expect(activity.value.JoinUrl).toEqual(
        'https://teams.microsoft.com/l/meetup-join/19%3ameeting_id%40thread.v2/0'
      );
    });

    it('reads a live channel meeting payload without producing a string join url', () => {
      const value = JSON.parse(CHANNEL_MEETING_END_PAYLOAD);

      expect(value.JoinUrl).toBeNull();
      expect(typeof value.JoinUrl).not.toEqual('string');
      expect(value.JoinUrl ? 'present' : 'absent').toEqual('absent');
    });
  });
});
