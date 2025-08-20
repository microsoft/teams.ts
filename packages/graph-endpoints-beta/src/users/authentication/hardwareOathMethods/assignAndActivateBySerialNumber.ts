import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber`
 *
 * Assign and activate a hardware token at the same time by hardware token serial number.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
