export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/cloudPC/resourceNamespaces': Operation<
    '/roleManagement/cloudPC/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/cloudPC/resourceNamespaces': Operation<
    '/roleManagement/cloudPC/resourceNamespaces',
    'post'
  >;
  'POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC/resourceNamespaces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/cloudPC/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/cloudPC/resourceNamespaces',
    body,
  };
}

export const importResourceActions = {
  /**
   * `POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
};
