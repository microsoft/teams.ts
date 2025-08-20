import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/temporaryAccessPassMethods': Operation<
    '/me/authentication/temporaryAccessPassMethods',
    'get'
  >;
  'GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'get'
  >;
  'POST /me/authentication/temporaryAccessPassMethods': Operation<
    '/me/authentication/temporaryAccessPassMethods',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'temporaryAccessPassAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/temporaryAccessPassMethods`
 *
 * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/temporaryAccessPassMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/temporaryAccessPassMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/temporaryAccessPassMethods',
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
 * `GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
 *
 * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'temporaryAccessPassAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/authentication/temporaryAccessPassMethods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/temporaryAccessPassMethods']['body'],
  params?: IEndpoints['POST /me/authentication/temporaryAccessPassMethods']['parameters']
): EndpointRequest<IEndpoints['POST /me/authentication/temporaryAccessPassMethods']['response']> {
  return {
    method: 'post',
    path: '/me/authentication/temporaryAccessPassMethods',
    paramDefs: [],
    params,
    body,
  };
}
