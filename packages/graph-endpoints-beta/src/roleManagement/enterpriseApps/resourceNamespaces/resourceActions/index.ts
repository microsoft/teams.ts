export * as authenticationContext from './authenticationContext';
export * as resourceScope from './resourceScope';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
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
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
    body,
  };
}
