import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects`
  *
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/getMemberObjects',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
