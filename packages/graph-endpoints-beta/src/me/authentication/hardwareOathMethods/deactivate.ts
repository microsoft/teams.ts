import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    'post'
  >;
}

/**
 * `POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate`
 *
 * Deactive a hardware OATH token. It remains assigned to a user.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    paramDefs: [{ name: 'hardwareOathAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
