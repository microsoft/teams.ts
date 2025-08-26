export * as grant from './grant';
export * as revokeGrants from './revokeGrants';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'delete'
  >;
  'GET /sites/{site-id}/permissions': Operation<'/sites/{site-id}/permissions', 'get'>;
  'GET /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/permissions/{permission-id}': Operation<
    '/sites/{site-id}/permissions/{permission-id}',
    'patch'
  >;
  'POST /sites/{site-id}/permissions': Operation<'/sites/{site-id}/permissions', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/permissions/{permission-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/permissions`
 *
 * Get the permission resources from the permissions navigation property on a site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/permissions',
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
 * `GET /sites/{site-id}/permissions/{permission-id}`
 *
 * Retrieve the properties and relationships of a permission object on a site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/permissions/{permission-id}`
 *
 * Update the permission object on a site.
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/permissions/{permission-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/permissions/{permission-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/permissions`
 *
 * Create a new permission object on a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/permissions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/permissions']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/permissions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/permissions',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
