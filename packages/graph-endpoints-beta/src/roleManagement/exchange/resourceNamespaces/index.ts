export * as importResourceActions from './importResourceActions';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
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
  body: IEndpoints['POST /roleManagement/exchange/resourceNamespaces']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/exchange/resourceNamespaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/resourceNamespaces',
    paramDefs: [],
    params,
    body,
  };
}
