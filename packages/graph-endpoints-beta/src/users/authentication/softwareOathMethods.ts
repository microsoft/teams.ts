import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/softwareOathMethods': Operation<
    '/users/{user-id}/authentication/softwareOathMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
 *
 * Delete a user&#x27;s Software OATH token authentication method object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'softwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/softwareOathMethods`
 *
 * The software OATH time-based one-time password (TOTP) applications registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/softwareOathMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
 *
 * The software OATH time-based one-time password (TOTP) applications registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'softwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
