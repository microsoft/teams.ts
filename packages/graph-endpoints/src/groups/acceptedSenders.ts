import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/acceptedSenders': Operation<'/groups/{group-id}/acceptedSenders', 'get'>;
}

/**
  * `GET /groups/{group-id}/acceptedSenders`
  *
  * Users in the accepted senders list can post to conversations of the group (identified in the GET request URL).
Make sure you do not specify the same user or group in the accepted senders and rejected senders lists, otherwise you will get an error.
  */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/acceptedSenders']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/acceptedSenders']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/acceptedSenders',
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
