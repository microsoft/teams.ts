import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept`
 *
 * Accept the specified event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/calendars/{calendar-id}/events/{event-id}/accept',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
