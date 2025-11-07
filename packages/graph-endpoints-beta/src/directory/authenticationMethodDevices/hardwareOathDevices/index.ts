export * as assignTo from './assignTo';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'delete'
  >;
  'GET /directory/authenticationMethodDevices/hardwareOathDevices': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices',
    'get'
  >;
  'GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'get'
  >;
  'PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    'patch'
  >;
  'POST /directory/authenticationMethodDevices/hardwareOathDevices': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices',
    'post'
  >;
}

/**
 * `DELETE /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Delete a Hardware OATH token. Token needs to be unassigned.
 */
export function del(
  params?: IEndpoints['DELETE /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hardwareOathTokenAuthenticationMethodDevice-id'],
    },
    params,
  };
}

/**
 * `GET /directory/authenticationMethodDevices/hardwareOathDevices`
 *
 * List all hardware OATH tokens in the directory.
 */
export function list(
  params?: IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Read the properties and relationships of a hardwareOathTokenAuthenticationMethodDevice object.
 */
export function get(
  params?: IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      path: ['hardwareOathTokenAuthenticationMethodDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}`
 *
 * Update the properties of a hardwareOathTokenAuthenticationMethodDevice object. The token needs to unassigned.
 */
export function update(
  body: IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['body'],
  params?: IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}',
    paramDefs: {
      path: ['hardwareOathTokenAuthenticationMethodDevice-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /directory/authenticationMethodDevices/hardwareOathDevices`
  *
  * Create a new hardwareOathTokenAuthenticationMethodDevice object. This API supports two scenarios:
- Create the new hardware token without assigning to a user. You can then assign to a user.
- Create and assign a hardware token to a user in the same request. 
  */
export function create(
  body: IEndpoints['POST /directory/authenticationMethodDevices/hardwareOathDevices']['body']
): EndpointRequest<
  IEndpoints['POST /directory/authenticationMethodDevices/hardwareOathDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices',
    body,
  };
}
