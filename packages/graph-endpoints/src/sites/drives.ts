import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/drives': Operation<'/sites/{site-id}/drives', 'get'>;
  'GET /sites/{site-id}/drives/{drive-id}': Operation<'/sites/{site-id}/drives/{drive-id}', 'get'>;
}

/**
 * `GET /sites/{site-id}/drives`
 *
 * The collection of drives (document libraries) under this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/drives']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/drives']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/drives',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/drives/{drive-id}`
 *
 * The collection of drives (document libraries) under this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/drives/{drive-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/drives/{drive-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
