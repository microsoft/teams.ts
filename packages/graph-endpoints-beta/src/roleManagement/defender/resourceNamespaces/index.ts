export * as importResourceActions from './importResourceActions';
export * as resourceActions from './resourceActions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/defender/resourceNamespaces': Operation<
    '/roleManagement/defender/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/defender/resourceNamespaces': Operation<
    '/roleManagement/defender/resourceNamespaces',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/defender/resourceNamespaces`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/resourceNamespaces',
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
 * `GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/defender/resourceNamespaces`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/defender/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/defender/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/defender/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/defender/resourceNamespaces',
    paramDefs: [],
    params,
    body,
  };
}
