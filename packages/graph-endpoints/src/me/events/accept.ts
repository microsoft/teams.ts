import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/events/{event-id}/accept': Operation<'/me/events/{event-id}/accept', 'post'>;
}

/**
 * `POST /me/events/{event-id}/accept`
 *
 * Accept the specified event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/accept']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/accept']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/accept']['response']> {
  return {
    method: 'post',
    path: '/me/events/{event-id}/accept',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
