export * as importResourceActions from './importResourceActions';
export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/resourceNamespaces': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/resourceNamespaces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/resourceNamespaces',
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
 * `GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/resourceNamespaces',
    paramDefs: [],
    params,
    body,
  };
}
