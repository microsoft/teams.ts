import { EventActivity } from '@microsoft/spark.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type EventActivityRoutes = {
  [K in EventActivity['name'] as EventAliases[K]]?: RouteHandler<
    IActivityContext<Extract<EventActivity, { name: K }>>,
    void
  >;
};

type EventAliases = {
  'application/vnd.microsoft.readReceipt': 'readReceipt';
  'application/vnd.microsoft.meetingStart': 'meetingStart';
  'application/vnd.microsoft.meetingEnd': 'meetingEnd';
  'application/vnd.microsoft.meetingParticipantJoin': 'meetingParticipantJoin';
  'application/vnd.microsoft.meetingParticipantLeave': 'meetingParticipantLeave';
};

export const EVENT_ALIASES: EventAliases = {
  'application/vnd.microsoft.readReceipt': 'readReceipt',
  'application/vnd.microsoft.meetingStart': 'meetingStart',
  'application/vnd.microsoft.meetingEnd': 'meetingEnd',
  'application/vnd.microsoft.meetingParticipantJoin': 'meetingParticipantJoin',
  'application/vnd.microsoft.meetingParticipantLeave': 'meetingParticipantLeave',
};
