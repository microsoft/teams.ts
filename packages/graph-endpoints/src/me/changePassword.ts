import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/changePassword': Operation<'/me/changePassword', 'post'>;
}

/**
  * `POST /me/changePassword`
  *
  * Update the signed-in user&#x27;s password. Any user can update their password without belonging to any administrator role.
To update another user&#x27;s password in either delegated or app-only scenarios, update the passwordProfile property of the user instead. See Example 3: Update the passwordProfile of a user and reset their password.
  */
export function create(
  body: IEndpoints['POST /me/changePassword']['body'],
  params?: IEndpoints['POST /me/changePassword']['parameters']
): EndpointRequest<IEndpoints['POST /me/changePassword']['response']> {
  return {
    method: 'post',
    path: '/me/changePassword',
    paramDefs: [],
    params,
    body,
  };
}
