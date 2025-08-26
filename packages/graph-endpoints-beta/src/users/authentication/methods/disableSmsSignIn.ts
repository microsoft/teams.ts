import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'authenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
