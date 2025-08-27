export * as commands from './commands';
export * as deviceTemplate from './deviceTemplate';
export * as extensions from './extensions';
export * as memberOf from './memberOf';
export * as registeredOwners from './registeredOwners';
export * as registeredUsers from './registeredUsers';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as usageRights from './usageRights';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'delete'>;
  'GET /me/devices': Operation<'/me/devices', 'get'>;
  'GET /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'get'>;
  'PATCH /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'patch'>;
  'POST /me/devices': Operation<'/me/devices', 'post'>;
}

/**
 * `DELETE /me/devices/{device-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/devices/{device-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/devices`
 *
 */
export function list(
  params?: IEndpoints['GET /me/devices']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices',
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
 * `GET /me/devices/{device-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/devices/{device-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/devices/{device-id}',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/devices`
 *
 */
export function create(
  body: IEndpoints['POST /me/devices']['body'],
  params?: IEndpoints['POST /me/devices']['parameters']
): EndpointRequest<IEndpoints['POST /me/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/devices',
    paramDefs: [],
    params,
    body,
  };
}
