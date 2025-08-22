import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/addKey': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addKey',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/addKey`
 *
 * Adds a key credential to a servicePrincipal. This method along with removeKey can be used by a servicePrincipal to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  ServicePrincipals that don&#x27;t have any existing valid certificates (i.e.: no certificates have been added yet, or all certificates have expired), won&#x27;t be able to use this service action. Update servicePrincipal can be used to perform an update instead.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['parameters']
): EndpointRequest<IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addKey']['response']> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/addKey',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
