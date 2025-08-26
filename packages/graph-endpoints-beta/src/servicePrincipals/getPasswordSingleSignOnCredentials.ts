import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials`
 *
 * Get a list of single sign-on credentials using a password for a user or group.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/getPasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
