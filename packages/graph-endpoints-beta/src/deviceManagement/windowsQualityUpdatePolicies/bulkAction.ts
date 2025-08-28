import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/bulkAction',
    paramDefs: [{ name: 'windowsQualityUpdatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
