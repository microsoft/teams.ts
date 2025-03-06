import { IMeetingEndEventActivity } from './meeting-end';
import { IMeetingParticipantJoinEventActivity } from './meeting-participant-join';
import { IMeetingParticipantLeaveEventActivity } from './meeting-participant-leave';
import { IMeetingStartEventActivity } from './meeting-start';
import { IReadReceiptEventActivity } from './read-receipt';

export type EventActivity =
  | IReadReceiptEventActivity
  | IMeetingStartEventActivity
  | IMeetingEndEventActivity
  | IMeetingParticipantJoinEventActivity
  | IMeetingParticipantLeaveEventActivity;

export * from './meeting-end';
export * from './meeting-participant-join';
export * from './meeting-participant-leave';
export * from './meeting-start';
export * from './read-receipt';
