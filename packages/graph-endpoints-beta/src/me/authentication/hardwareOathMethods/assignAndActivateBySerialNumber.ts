import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber': Operation<
    '/me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    'post'
  >;
}

/**
 * `POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber`
 *
 * Assign and activate a hardware token at the same time by hardware token serial number.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['body'],
  params?: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    paramDefs: [],
    params,
    body,
  };
}
