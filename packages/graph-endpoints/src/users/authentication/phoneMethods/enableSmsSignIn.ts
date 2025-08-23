import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn`
 *
 * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'phoneAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
