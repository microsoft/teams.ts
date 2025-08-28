import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule',
    'post'
  >;
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule`
 *
 * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/getSchedule',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
