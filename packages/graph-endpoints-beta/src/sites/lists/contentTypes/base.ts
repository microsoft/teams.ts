import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base`
 *
 * Parent contentType from which this content type is derived.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}
