export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/exchange/resourceNamespaces': Operation<
    '/roleManagement/exchange/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/exchange/resourceNamespaces': Operation<
    '/roleManagement/exchange/resourceNamespaces',
    'post'
  >;
  'POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions': Operation<
    '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/exchange/resourceNamespaces`
 *
 * Resource that represents a collection of related actions.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/exchange/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/exchange/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * Resource that represents a collection of related actions.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/exchange/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/resourceNamespaces']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/exchange/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/resourceNamespaces',
    body,
  };
}

export const importResourceActions = {
  /**
   * `POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
};
