import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}
