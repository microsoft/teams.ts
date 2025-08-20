import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/assign',
    paramDefs: [{ name: 'groupPolicyConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
