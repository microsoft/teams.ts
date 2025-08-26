import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/secrets',
    'put'
  >;
}

/**
 * `PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets`
 *
 * Provide credentials for establishing connectivity with the target system.
 */
export function set(
  body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['body'],
  params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['parameters']
): EndpointRequest<
  IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization/secrets']['response']
> {
  return {
    method: 'put',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/secrets',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
