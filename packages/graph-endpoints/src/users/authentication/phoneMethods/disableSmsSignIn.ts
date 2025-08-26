import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn`
 *
 * Disable SMS sign-in for an existing mobile phone number registered to a user. The number will no longer be available for SMS sign-in, which can prevent your user from signing in.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'phoneAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
