import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendars/{calendar-id}/getSchedule': Operation<
    '/users/{user-id}/calendars/{calendar-id}/getSchedule',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendars/{calendar-id}/getSchedule`
 *
 * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/getSchedule']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendars/{calendar-id}/getSchedule',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
