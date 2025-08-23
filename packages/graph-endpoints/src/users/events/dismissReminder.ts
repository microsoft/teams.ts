import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/events/{event-id}/dismissReminder': Operation<
    '/users/{user-id}/events/{event-id}/dismissReminder',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/events/{event-id}/dismissReminder`
 *
 * Dismiss a reminder that has been triggered for an event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/events/{event-id}/dismissReminder']['body'],
  params?: IEndpoints['POST /users/{user-id}/events/{event-id}/dismissReminder']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/events/{event-id}/dismissReminder']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/events/{event-id}/dismissReminder',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
