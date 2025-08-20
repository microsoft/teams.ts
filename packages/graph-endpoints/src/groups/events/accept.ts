import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/events/{event-id}/accept': Operation<
    '/groups/{group-id}/events/{event-id}/accept',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/events/{event-id}/accept`
 *
 * Accept the specified event in a user calendar.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/events/{event-id}/accept']['body'],
  params?: IEndpoints['POST /groups/{group-id}/events/{event-id}/accept']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/events/{event-id}/accept']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/events/{event-id}/accept',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
