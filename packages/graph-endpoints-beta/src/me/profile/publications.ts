import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'delete'
  >;
  'GET /me/profile/publications': Operation<'/me/profile/publications', 'get'>;
  'GET /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'get'
  >;
  'PATCH /me/profile/publications/{itemPublication-id}': Operation<
    '/me/profile/publications/{itemPublication-id}',
    'patch'
  >;
  'POST /me/profile/publications': Operation<'/me/profile/publications', 'post'>;
}

/**
 * `DELETE /me/profile/publications/{itemPublication-id}`
 *
 * Delete an itemPublication object.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/publications/{itemPublication-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/publications/{itemPublication-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'itemPublication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/publications`
 *
 * Retrieve a list of itemPublication objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/publications']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/publications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/publications',
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
 * `GET /me/profile/publications/{itemPublication-id}`
 *
 * Read the properties and relationships of an itemPublication object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/publications/{itemPublication-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/publications/{itemPublication-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'itemPublication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/publications/{itemPublication-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/publications/{itemPublication-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/publications/{itemPublication-id}',
    paramDefs: [{ name: 'itemPublication-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/publications`
 *
 * Create a new itemPublication object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/publications']['body'],
  params?: IEndpoints['POST /me/profile/publications']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/publications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/publications',
    paramDefs: [],
    params,
    body,
  };
}
