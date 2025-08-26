import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue`
 *
 * The group policy definition value associated with the presentation value.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/presentationValues/{groupPolicyPresentationValue-id}/definitionValue',
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
