import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions': Operation<
    '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    'post'
  >;
}

/**
 * `POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/resourceNamespaces/{unifiedRbacResourceNamespace-id}/importResourceActions',
    paramDefs: [{ name: 'unifiedRbacResourceNamespace-id', in: 'path' }],
    params,
    body,
  };
}
