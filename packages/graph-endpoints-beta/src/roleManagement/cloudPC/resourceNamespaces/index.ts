export * as importResourceActions from './importResourceActions';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
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
  body: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/cloudPC/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/cloudPC/resourceNamespaces',
    paramDefs: [],
    params,
    body,
  };
}
