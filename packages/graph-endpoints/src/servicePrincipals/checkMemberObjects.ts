import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects': Operation<
    '/servicePrincipals/{servicePrincipal-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/checkMemberObjects',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
