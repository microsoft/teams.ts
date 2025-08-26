import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/getPasswordSingleSignOnCredentials': Operation<
    '/me/getPasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /me/getPasswordSingleSignOnCredentials`
 *
 * Get the list of password-based single sign-on credentials for a given user. This API returns the encrypted passwords as null or empty strings.
 */
export function create(
  body: IEndpoints['POST /me/getPasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /me/getPasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<IEndpoints['POST /me/getPasswordSingleSignOnCredentials']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/getPasswordSingleSignOnCredentials',
    paramDefs: [],
    params,
    body,
  };
}
