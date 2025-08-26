import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn`
 *
 * Disable SMS sign-in for an existing mobile phone number registered to a user. The number will no longer be available for SMS sign-in, which can prevent your user from signing in.
 */
export function create(
  body: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['body'],
  params?: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['response']
> {
  return {
    method: 'post',
    path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    paramDefs: [{ name: 'phoneAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
