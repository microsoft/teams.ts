import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute',
    'get'
  >;
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute`
 *
 * The user attribute that you want to add to your user flow.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}/userAttribute',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'identityUserFlowAttributeAssignment-id', in: 'path' },
    ],
    params,
  };
}
