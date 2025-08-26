export * as audience from './audience';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/deployments/{deployment-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}',
    'delete'
  >;
  'GET /admin/windows/updates/deployments': Operation<'/admin/windows/updates/deployments', 'get'>;
  'GET /admin/windows/updates/deployments/{deployment-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/deployments/{deployment-id}': Operation<
    '/admin/windows/updates/deployments/{deployment-id}',
    'patch'
  >;
  'POST /admin/windows/updates/deployments': Operation<
    '/admin/windows/updates/deployments',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/deployments/{deployment-id}`
 *
 * Delete a deployment object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/deployments/{deployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/deployments/{deployment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/deployments`
 *
 * Get a list of deployment objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/deployments']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/deployments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments',
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
 * `GET /admin/windows/updates/deployments/{deployment-id}`
 *
 * Read the properties and relationships of a deployment object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/deployments/{deployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/deployments/{deployment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/deployments/{deployment-id}`
 *
 * Update the properties of a deployment object.
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/deployments/{deployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/deployments/{deployment-id}',
    paramDefs: [{ name: 'deployment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/deployments`
 *
 * Create a new deployment object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/deployments']['body'],
  params?: IEndpoints['POST /admin/windows/updates/deployments']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/deployments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deployments',
    paramDefs: [],
    params,
    body,
  };
}
