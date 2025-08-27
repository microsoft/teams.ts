import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['body'],
  params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    paramDefs: [{ name: 'authenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
