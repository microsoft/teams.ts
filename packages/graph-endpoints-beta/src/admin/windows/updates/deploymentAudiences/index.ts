export * as applicableContent from './applicableContent';
export * as exclusions from './exclusions';
export * as members from './members';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deploymentAudiences': Operation<
    '/admin/windows/updates/deploymentAudiences',
    'get'
  >;
  'GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}': Operation<
    '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    'patch'
  >;
  'POST /admin/windows/updates/deploymentAudiences': Operation<
    '/admin/windows/updates/deploymentAudiences',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 * Delete a deploymentAudience object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deploymentAudience-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences`
 *
 * Get a list of deploymentAudience objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/deploymentAudiences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 * Read the properties and relationships of a deploymentAudience object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deploymentAudience-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deploymentAudiences/{deploymentAudience-id}',
    paramDefs: [{ name: 'deploymentAudience-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deploymentAudiences`
 *
 * Create a new deploymentAudience object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deploymentAudiences']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deploymentAudiences']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/deploymentAudiences']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deploymentAudiences',
    paramDefs: [],
    params,
    body,
  };
}
