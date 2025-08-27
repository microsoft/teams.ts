import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks`
 *
 * The collection of columns that are required by this content type.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 * The collection of columns that are required by this content type.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
