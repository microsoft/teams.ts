import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
 *
 * The collection of columns that are required by this content type.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
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
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 * The collection of columns that are required by this content type.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['body'],
  params?: IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
