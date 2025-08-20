import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder',
    'post'
  >;
}

/**
 * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
