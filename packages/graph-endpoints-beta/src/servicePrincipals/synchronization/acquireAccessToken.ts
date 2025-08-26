import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken`
 *
 * Acquire an OAuth Access token to authorize the Microsoft Entra provisioning service to provision users into an application.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/acquireAccessToken',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
