import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate`
 *
 * Deactive a hardware OATH token. It remains assigned to a user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}
