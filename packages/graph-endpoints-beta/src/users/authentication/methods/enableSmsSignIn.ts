import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'authenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
