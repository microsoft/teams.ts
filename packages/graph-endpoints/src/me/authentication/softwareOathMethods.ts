import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/softwareOathMethods': Operation<
    '/me/authentication/softwareOathMethods',
    'get'
  >;
  'GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'get'
  >;
}

/**
 * `DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'softwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/softwareOathMethods`
 *
 * Retrieve a list of a user&#x27;s software OATH token authentication method objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/softwareOathMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/softwareOathMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/softwareOathMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
 *
 * Retrieve a user&#x27;s single Software OATH token authentication method object and its properties.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'softwareOathAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}
