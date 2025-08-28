import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder': Operation<
    '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder`
 *
 * Postpone a reminder for an event in a user calendar until a new time.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/snoozeReminder',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
