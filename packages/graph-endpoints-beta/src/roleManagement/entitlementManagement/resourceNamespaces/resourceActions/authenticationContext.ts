import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRbacResourceNamespace-id', in: 'path' },
      { name: 'unifiedRbacResourceAction-id', in: 'path' },
    ],
    params,
  };
}
