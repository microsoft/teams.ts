export * as instances from './instances';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'delete'
  >;
  'GET /me/settings/windows': Operation<'/me/settings/windows', 'get'>;
  'GET /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'get'
  >;
  'PATCH /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'patch'
  >;
  'POST /me/settings/windows': Operation<'/me/settings/windows', 'post'>;
}

/**
 * `DELETE /me/settings/windows/{windowsSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/settings/windows`
 *
 * Get a list of windowsSetting objects and their properties for the signed in user.
 */
export function list(
  params?: IEndpoints['GET /me/settings/windows']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/windows']['response']> {
  return {
    method: 'get',
    path: '/me/settings/windows',
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
 * `GET /me/settings/windows/{windowsSetting-id}`
 *
 * Read the properties and relationships of a windowsSetting object by passing the ID of the setting in the URL. This method gets the setting for the signed-in user.
 */
export function get(
  params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    method: 'get',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/windows/{windowsSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['body'],
  params?: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: [{ name: 'windowsSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/settings/windows`
 *
 */
export function create(
  body: IEndpoints['POST /me/settings/windows']['body'],
  params?: IEndpoints['POST /me/settings/windows']['parameters']
): EndpointRequest<IEndpoints['POST /me/settings/windows']['response']> {
  return {
    method: 'post',
    path: '/me/settings/windows',
    paramDefs: [],
    params,
    body,
  };
}
