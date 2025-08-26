import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/getPasswordSingleSignOnCredentials': Operation<
    '/groups/{group-id}/getPasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/getPasswordSingleSignOnCredentials`
 *
 * Get the list of password-based single sign-on credentials for a group. This API returns the encrypted passwords as null.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/getPasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /groups/{group-id}/getPasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/getPasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/getPasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
