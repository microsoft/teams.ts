import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device': Operation<
    '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device`
 *
 * The registered device on which this Platform Credential resides. Supports $expand. When you get a user&#x27;s Platform Credential registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/platformCredentialAuthenticationMethod/_jpuR-TGZtk6aQCLF3BQjA2?$expand&#x3D;device.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/platformCredentialMethods/{platformCredentialAuthenticationMethod-id}/device',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'platformCredentialAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
