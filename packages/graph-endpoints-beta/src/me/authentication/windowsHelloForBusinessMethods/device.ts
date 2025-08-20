import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device': Operation<
    '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device`
 *
 * The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user&#x27;s Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsHelloForBusinessAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
