import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}
