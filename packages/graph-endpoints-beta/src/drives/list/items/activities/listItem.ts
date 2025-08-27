import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}
