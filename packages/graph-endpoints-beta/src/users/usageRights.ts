import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'delete'
  >;
  'GET /users/{user-id}/usageRights': Operation<'/users/{user-id}/usageRights', 'get'>;
  'GET /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'POST /users/{user-id}/usageRights': Operation<'/users/{user-id}/usageRights', 'post'>;
}

/**
 * `DELETE /users/{user-id}/usageRights/{usageRight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/usageRights`
 *
 * Retrieve a list of usageRight objects for a given user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/usageRights',
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
 * `GET /users/{user-id}/usageRights/{usageRight-id}`
 *
 * Represents the usage rights a user has been granted.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/usageRights/{usageRight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/usageRights`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/usageRights']['body'],
  params?: IEndpoints['POST /users/{user-id}/usageRights']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/usageRights',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
