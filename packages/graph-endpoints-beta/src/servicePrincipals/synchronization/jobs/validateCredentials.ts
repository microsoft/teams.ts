import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials',
    'post'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials`
 *
 */
export function create$1(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/validateCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials`
 *
 * Validate that the credentials are valid in the tenant.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}/validateCredentials',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
