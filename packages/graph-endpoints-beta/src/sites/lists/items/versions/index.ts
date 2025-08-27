export * as fields from './fields';
export * as restoreVersion from './restoreVersion';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 * The list of previous versions of the list item.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
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
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 * The list of previous versions of the list item.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
