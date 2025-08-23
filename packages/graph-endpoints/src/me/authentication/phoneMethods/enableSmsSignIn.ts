import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn`
 *
 * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
 */
export function create(
  body: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['body'],
  params?: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['response']
> {
  return {
    method: 'post',
    path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
    paramDefs: [{ name: 'phoneAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
