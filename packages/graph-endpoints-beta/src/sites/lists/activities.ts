import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/activities': Operation<
    '/sites/{site-id}/lists/{list-id}/activities',
    'get'
  >;
  'POST /sites/{site-id}/lists/{list-id}/activities': Operation<
    '/sites/{site-id}/lists/{list-id}/activities',
    'post'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/activities`
 *
 * The recent activities that took place within this list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/activities']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/activities',
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
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/activities']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/activities']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/activities',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
