import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/deletePasswordSingleSignOnCredentials': Operation<
    '/groups/{group-id}/deletePasswordSingleSignOnCredentials',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/deletePasswordSingleSignOnCredentials`
 *
 * Delete the password-based single sign-on credentials for a given group to a given service principal.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/deletePasswordSingleSignOnCredentials']['body'],
  params?: IEndpoints['POST /groups/{group-id}/deletePasswordSingleSignOnCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/deletePasswordSingleSignOnCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/deletePasswordSingleSignOnCredentials',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
