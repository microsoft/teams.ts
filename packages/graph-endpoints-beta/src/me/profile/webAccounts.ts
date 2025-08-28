import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'delete'
  >;
  'GET /me/profile/webAccounts': Operation<'/me/profile/webAccounts', 'get'>;
  'GET /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'get'
  >;
  'PATCH /me/profile/webAccounts/{webAccount-id}': Operation<
    '/me/profile/webAccounts/{webAccount-id}',
    'patch'
  >;
  'POST /me/profile/webAccounts': Operation<'/me/profile/webAccounts', 'post'>;
}

/**
 * `DELETE /me/profile/webAccounts/{webAccount-id}`
 *
 * Delete a webAccount object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/webAccounts/{webAccount-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/webAccounts/{webAccount-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'webAccount-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/webAccounts`
 *
 * Retrieve a list of webAccounts objects from the user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/webAccounts']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/webAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/webAccounts',
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
 * `GET /me/profile/webAccounts/{webAccount-id}`
 *
 * Retrieve the properties and relationships of a webAccount object from a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/webAccounts/{webAccount-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/webAccounts/{webAccount-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'webAccount-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/webAccounts/{webAccount-id}`
 *
 * Update the properties of a webAccount object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/webAccounts/{webAccount-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/webAccounts/{webAccount-id}',
    paramDefs: [{ name: 'webAccount-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/webAccounts`
 *
 * Create a new webAccount object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/webAccounts']['body'],
  params?: IEndpoints['POST /me/profile/webAccounts']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/webAccounts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/webAccounts',
    paramDefs: [],
    params,
    body,
  };
}
