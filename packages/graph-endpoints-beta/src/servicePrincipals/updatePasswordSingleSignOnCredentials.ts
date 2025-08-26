import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials`
 *
 * Update single sign-on credentials using a password for a user or group.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/updatePasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
