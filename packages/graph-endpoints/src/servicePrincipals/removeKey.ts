import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/removeKey': Operation<
    '/servicePrincipals/{servicePrincipal-id}/removeKey',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/removeKey`
 *
 * Remove a key credential from a servicePrincipal. This method along with addKey can be used by a servicePrincipal to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/removeKey']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/removeKey',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
