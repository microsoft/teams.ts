export * as sourceColumn from './sourceColumn';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'delete'
  >;
  'GET /sites/{site-id}/columns': Operation<'/sites/{site-id}/columns', 'get'>;
  'GET /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/columns/{columnDefinition-id}': Operation<
    '/sites/{site-id}/columns/{columnDefinition-id}',
    'patch'
  >;
  'POST /sites/{site-id}/columns': Operation<'/sites/{site-id}/columns', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/columns/{columnDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/columns`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/columns']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/columns',
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
 * `GET /sites/{site-id}/columns/{columnDefinition-id}`
 *
 * The collection of column definitions reusable across lists under this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/columns/{columnDefinition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/columns/{columnDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/columns/{columnDefinition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/columns/{columnDefinition-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/columns`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/columns']['body'],
  params?: IEndpoints['POST /sites/{site-id}/columns']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/columns']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/columns',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
