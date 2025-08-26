import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
    'post'
  >;
}

/**
 * `POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate`
 *
 * Activate a hardware OATH token that is already assigned to a user. A user can self-activate their token or an admin can activate for a user.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
    paramDefs: [{ name: 'hardwareOathAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
