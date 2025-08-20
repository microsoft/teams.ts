export * as importResourceActions from './importResourceActions';
export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces',
    paramDefs: [{ name: 'rbacApplication-id', in: 'path' }],
    params,
    body,
  };
}
