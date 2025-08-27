export * as importResourceActions from './importResourceActions';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
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
  body: IEndpoints['POST /roleManagement/directory/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/directory/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/directory/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/resourceNamespaces',
    paramDefs: [],
    params,
    body,
  };
}
