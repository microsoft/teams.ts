import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'delete'>;
  'GET /me/usageRights': Operation<'/me/usageRights', 'get'>;
  'GET /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'get'>;
  'PATCH /me/usageRights/{usageRight-id}': Operation<'/me/usageRights/{usageRight-id}', 'patch'>;
  'POST /me/usageRights': Operation<'/me/usageRights', 'post'>;
}

/**
 * `DELETE /me/usageRights/{usageRight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/usageRights/{usageRight-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/usageRights`
 *
 * Represents the usage rights a user has been granted.
 */
export function list(
  params?: IEndpoints['GET /me/usageRights']['parameters']
): EndpointRequest<IEndpoints['GET /me/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/usageRights',
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
 * `GET /me/usageRights/{usageRight-id}`
 *
 * Represents the usage rights a user has been granted.
 */
export function get(
  params?: IEndpoints['GET /me/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/usageRights/{usageRight-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'usageRight-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/usageRights/{usageRight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/usageRights/{usageRight-id}']['body'],
  params?: IEndpoints['PATCH /me/usageRights/{usageRight-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/usageRights/{usageRight-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/usageRights/{usageRight-id}',
    paramDefs: [{ name: 'usageRight-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/usageRights`
 *
 */
export function create(
  body: IEndpoints['POST /me/usageRights']['body'],
  params?: IEndpoints['POST /me/usageRights']['parameters']
): EndpointRequest<IEndpoints['POST /me/usageRights']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/usageRights',
    paramDefs: [],
    params,
    body,
  };
}
