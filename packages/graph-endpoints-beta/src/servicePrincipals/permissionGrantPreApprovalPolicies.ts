import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies': Operation<
    '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies`
 *
 * Retrieve the permissionGrantPreApprovalPolicy object for the servicePrincipal.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
 *
 * Retrieve the permissionGrantPreApprovalPolicy object for the servicePrincipal.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'permissionGrantPreApprovalPolicy-id', in: 'path' },
    ],
    params,
  };
}
