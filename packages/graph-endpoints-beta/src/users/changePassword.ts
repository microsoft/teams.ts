import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/changePassword': Operation<'/users/{user-id}/changePassword', 'post'>;
}

/**
  * `POST /users/{user-id}/changePassword`
  *
  * Update the signed-in user&#x27;s password. Any user can update their password without belonging to any administrator role.
To update another user&#x27;s password in either delegated or app-only scenarios, update the passwordProfile property of the user instead. See Example 3: Update the passwordProfile of a user and reset their password.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/changePassword']['body'],
  params?: IEndpoints['POST /users/{user-id}/changePassword']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/changePassword']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/changePassword',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
