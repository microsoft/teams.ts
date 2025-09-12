export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/directory/resourceNamespaces': Operation<
    '/roleManagement/directory/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/directory/resourceNamespaces': Operation<
    '/roleManagement/directory/resourceNamespaces',
    'post'
  >;
  'POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/resourceNamespaces`
 *
 * Get a list of the unifiedRbacResourceNamespace objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/directory/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * Read the properties and relationships of an unifiedRbacResourceNamespace object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/resourceNamespaces']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/directory/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/resourceNamespaces',
    body,
  };
}

export const importResourceActions = {
  /**
   * `POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
};
