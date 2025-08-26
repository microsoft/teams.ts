import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate`
 *
 * Assign and activate a hardware token at the same time. This operation requires the device ID to activate it.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivate',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
