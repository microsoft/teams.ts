import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'delete'>;
  'GET /me/extensions': Operation<'/me/extensions', 'get'>;
  'GET /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'get'>;
  'PATCH /me/extensions/{extension-id}': Operation<'/me/extensions/{extension-id}', 'patch'>;
  'POST /me/extensions': Operation<'/me/extensions', 'post'>;
}

/**
 * `DELETE /me/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/extensions/{extension-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/extensions`
 *
 * The collection of open extensions defined for the user. Read-only. Supports $expand. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/extensions']['response']> {
  return {
    method: 'get',
    path: '/me/extensions',
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
 * `GET /me/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the user. Read-only. Supports $expand. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/extensions/{extension-id}']['response']> {
  return {
    method: 'get',
    path: '/me/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/extensions/{extension-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/extensions/{extension-id}',
    paramDefs: [{ name: 'extension-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/extensions']['body'],
  params?: IEndpoints['POST /me/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/extensions']['response']> {
  return {
    method: 'post',
    path: '/me/extensions',
    paramDefs: [],
    params,
    body,
  };
}
