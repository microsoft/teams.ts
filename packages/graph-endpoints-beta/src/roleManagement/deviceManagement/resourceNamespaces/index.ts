export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/deviceManagement/resourceNamespaces': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces',
    'post'
  >;
  'POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/resourceNamespaces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/deviceManagement/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/deviceManagement/resourceNamespaces',
    body,
  };
}

export const importResourceActions = {
  /**
   * `POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
};
