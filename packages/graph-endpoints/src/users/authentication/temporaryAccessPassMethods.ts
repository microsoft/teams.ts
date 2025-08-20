import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/temporaryAccessPassMethods': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'get'
  >;
  'POST /users/{user-id}/authentication/temporaryAccessPassMethods': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
 *
 * Delete a users&#x27;s temporaryAccessPassAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'temporaryAccessPassAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/temporaryAccessPassMethods`
 *
 * Retrieve a list of a user&#x27;s temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass method.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/temporaryAccessPassMethods',
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
 * `GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
 *
 * Retrieve a user&#x27;s single temporaryAccessPassAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'temporaryAccessPassAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/authentication/temporaryAccessPassMethods`
 *
 * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that&#x27;s usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/temporaryAccessPassMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
