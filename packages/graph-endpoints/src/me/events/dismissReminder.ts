import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/dismissReminder': Operation<
    '/me/events/{event-id}/dismissReminder',
    'post'
  >;
}

/**
 * `POST /me/events/{event-id}/dismissReminder`
 *
 * Dismiss a reminder that has been triggered for an event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/dismissReminder']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/dismissReminder']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/dismissReminder']['response']> {
  return {
    method: 'post',
    path: '/me/events/{event-id}/dismissReminder',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
