import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks`
 *
 * The collection of columns that are required by this content type.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
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
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 * The collection of columns that are required by this content type.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
