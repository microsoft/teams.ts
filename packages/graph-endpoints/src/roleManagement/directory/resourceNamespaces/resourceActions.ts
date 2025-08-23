import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
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
 * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
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
 * `PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: [
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
    params,
    body,
  };
}
