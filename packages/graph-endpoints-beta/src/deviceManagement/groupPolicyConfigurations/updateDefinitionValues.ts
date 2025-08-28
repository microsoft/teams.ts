import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/updateDefinitionValues',
    paramDefs: [{ name: 'groupPolicyConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
