import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/rejectedSenders': Operation<'/groups/{group-id}/rejectedSenders', 'get'>;
}

/**
 * `GET /groups/{group-id}/rejectedSenders`
 *
 * Get a list of users or groups that are in the rejected-senders list for this group. Users in the rejected senders list can&#x27;t post to conversations of the group (identified in the GET request URL). Make sure you don&#x27;t specify the same user or group in the rejected senders and accepted senders lists, otherwise you get an error.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/rejectedSenders']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/rejectedSenders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/rejectedSenders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
