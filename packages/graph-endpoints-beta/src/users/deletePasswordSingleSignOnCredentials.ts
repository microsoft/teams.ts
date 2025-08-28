import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/deletePasswordSingleSignOnCredentials': Operation<
    '/users/{user-id}/deletePasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/deletePasswordSingleSignOnCredentials`
 *
 * Delete the password-based single sign-on credentials for a given user to a given service principal.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deletePasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deletePasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
