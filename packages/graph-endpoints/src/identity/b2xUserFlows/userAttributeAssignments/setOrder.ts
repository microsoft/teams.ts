import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder',
    'post'
  >;
}

/**
 * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder`
 *
 * Set the order of identityUserFlowAttributeAssignments being collected within a user flow.
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder']['response']
> {
  return {
    method: 'post',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/setOrder',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
