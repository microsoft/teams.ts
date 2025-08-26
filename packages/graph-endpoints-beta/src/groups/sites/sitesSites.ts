import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/sites': Operation<
    '/groups/{group-id}/sites/{site-id}/sites',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/sites/{site-id1}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/sites`
 *
 * The collection of the sub-sites under this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/sites',
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
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}`
 *
 * The collection of the sub-sites under this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/sites/{site-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/sites/{site-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'site-id1', in: 'path' },
    ],
    params,
  };
}
