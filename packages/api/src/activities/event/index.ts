import { MeetingEndEventActivity } from './meeting-end';
import { MeetingParticipantJoinEventActivity } from './meeting-participant-join';
import { MeetingParticipantLeaveEventActivity } from './meeting-participant-leave';
import { MeetingStartEventActivity } from './meeting-start';
import { ReadReceiptEventActivity } from './read-receipt';

export type EventActivity =
  | ReadReceiptEventActivity
  | MeetingStartEventActivity
  | MeetingEndEventActivity
  | MeetingParticipantJoinEventActivity
  | MeetingParticipantLeaveEventActivity;

export * from './meeting-end';
export * from './meeting-participant-join';
export * from './meeting-participant-leave';
export * from './meeting-start';
export * from './read-receipt';
