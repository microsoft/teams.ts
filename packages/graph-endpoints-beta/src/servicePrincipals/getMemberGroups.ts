import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberGroups',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups`
 *
 * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the DirectoryResultSizeLimitExceeded error code. If you get the DirectoryResultSizeLimitExceeded error code, use the List group transitive memberOf API instead.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/getMemberGroups',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
