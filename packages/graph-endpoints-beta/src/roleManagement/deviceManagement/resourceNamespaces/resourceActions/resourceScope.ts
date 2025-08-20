import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'patch'
  >;
}

/**
 * `DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
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
 * `PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['body'],
  params?: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    paramDefs: [
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
    body,
  };
}
