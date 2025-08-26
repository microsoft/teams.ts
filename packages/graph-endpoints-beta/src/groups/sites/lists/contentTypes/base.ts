import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base`
 *
 * Parent contentType from which this content type is derived.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}
