export * as authenticationContext from './authenticationContext';
export * as resourceScope from './resourceScope';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
  'GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/cloudPC/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
    params,
    body,
  };
}
