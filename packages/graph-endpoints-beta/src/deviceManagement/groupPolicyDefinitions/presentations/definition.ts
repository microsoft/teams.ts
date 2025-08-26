import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition`
 *
 * The group policy definition associated with the presentation.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/presentations/{groupPolicyPresentation-id}/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
      { name: 'groupPolicyPresentation-id', in: 'path' },
    ],
    params,
  };
}
