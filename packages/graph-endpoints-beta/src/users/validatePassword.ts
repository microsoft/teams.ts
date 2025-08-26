import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/validatePassword': Operation<'/users/validatePassword', 'post'>;
}

/**
 * `POST /users/validatePassword`
 *
 * Check a user&#x27;s password against the organization&#x27;s password validation policy and report whether the password is valid. Use this action to provide real-time feedback on password strength while the user types their password.
 */
export function create(
  body: IEndpoints['POST /users/validatePassword']['body'],
  params?: IEndpoints['POST /users/validatePassword']['parameters']
): EndpointRequest<IEndpoints['POST /users/validatePassword']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/validatePassword',
    paramDefs: [],
    params,
    body,
  };
}
