import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials`
 *
 * Delete single sign-on credentials using a password for a user or group.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/deletePasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
