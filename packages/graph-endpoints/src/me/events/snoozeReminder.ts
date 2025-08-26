import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/snoozeReminder': Operation<
    '/me/events/{event-id}/snoozeReminder',
    'post'
  >;
}

/**
 * `POST /me/events/{event-id}/snoozeReminder`
 *
 * Postpone a reminder for an event in a user calendar until a new time.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/snoozeReminder']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/snoozeReminder']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/snoozeReminder']['response']> {
  return {
    method: 'post',
    path: '/me/events/{event-id}/snoozeReminder',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
