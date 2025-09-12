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
    paramDefs: {
      header: ['If-Match'],
      path: ['deployment-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deployment-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deployment-id'],
    },
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
  body: IEndpoints['POST /admin/windows/updates/deployments']['body']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/deployments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/deployments',
    body,
  };
}
