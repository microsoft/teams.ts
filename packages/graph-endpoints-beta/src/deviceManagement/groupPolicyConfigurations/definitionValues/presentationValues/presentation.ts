import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation`
 *
 * The group policy presentation associated with the presentation value.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/presentation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
      { name: 'groupPolicyDefinitionValue-id', in: 'path' },
      { name: 'groupPolicyPresentationValue-id', in: 'path' },
    ],
    params,
  };
}
