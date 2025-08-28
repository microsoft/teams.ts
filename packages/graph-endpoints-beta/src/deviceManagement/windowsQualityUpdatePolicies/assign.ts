import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assign',
    paramDefs: [{ name: 'windowsQualityUpdatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
