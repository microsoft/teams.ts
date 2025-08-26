import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/getPasswordSingleSignOnCredentials': Operation<
    '/users/{user-id}/getPasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/getPasswordSingleSignOnCredentials`
 *
 * Get the list of password-based single sign-on credentials for a given user. This API returns the encrypted passwords as null or empty strings.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/getPasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /users/{user-id}/getPasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/getPasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/getPasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
