import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/sites': Operation<'/sites/{site-id}/sites', 'get'>;
  'GET /sites/{site-id}/sites/{site-id1}': Operation<'/sites/{site-id}/sites/{site-id1}', 'get'>;
}

/**
 * `GET /sites/{site-id}/sites`
 *
 * Get a collection of subsites defined for a site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/sites']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/sites']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/sites',
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
 * `GET /sites/{site-id}/sites/{site-id1}`
 *
 * The collection of the sub-sites under this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/sites/{site-id1}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/sites/{site-id1}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/sites/{site-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'site-id1', in: 'path' },
    ],
    params,
  };
}
