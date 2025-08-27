import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
    'get'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
    'post'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities`
 *
 * The recent activities that took place within this list.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
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
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/activities',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
