import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendar/events/{event-id}/accept': Operation<
    '/me/calendar/events/{event-id}/accept',
    'post'
  >;
}

/**
 * `POST /me/calendar/events/{event-id}/accept`
 *
 * Accept the specified event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /me/calendar/events/{event-id}/accept']['body'],
  params?: IEndpoints['POST /me/calendar/events/{event-id}/accept']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/events/{event-id}/accept']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/events/{event-id}/accept',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
