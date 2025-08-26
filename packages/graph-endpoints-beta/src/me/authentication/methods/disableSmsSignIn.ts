import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
}

/**
 * `POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['body'],
  params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    paramDefs: [{ name: 'authenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
