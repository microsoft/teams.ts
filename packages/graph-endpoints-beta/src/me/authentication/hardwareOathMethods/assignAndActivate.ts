import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/hardwareOathMethods/assignAndActivate': Operation<
    '/me/authentication/hardwareOathMethods/assignAndActivate',
    'post'
  >;
}

/**
 * `POST /me/authentication/hardwareOathMethods/assignAndActivate`
 *
 * Assign and activate a hardware token at the same time. This operation requires the device ID to activate it.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivate']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods/assignAndActivate',
    paramDefs: [],
    params,
    body,
  };
}
