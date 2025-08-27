import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials`
 *
 * Create single sign-on credentials using a password for a user or group.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/createPasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
