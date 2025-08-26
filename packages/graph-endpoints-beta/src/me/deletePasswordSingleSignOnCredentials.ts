import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/deletePasswordSingleSignOnCredentials': Operation<
    '/me/deletePasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /me/deletePasswordSingleSignOnCredentials`
 *
 * Delete the password-based single sign-on credentials for a given user to a given service principal.
 */
export function create(
  body: IEndpoints['POST /me/deletePasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /me/deletePasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<IEndpoints['POST /me/deletePasswordSingleSignOnCredentials']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deletePasswordSingleSignOnCredentials',
    paramDefs: [],
    params,
    body,
  };
}
