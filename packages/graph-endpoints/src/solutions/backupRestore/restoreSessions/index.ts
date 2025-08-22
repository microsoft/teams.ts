export * as activate from './activate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/restoreSessions': Operation<
    '/solutions/backupRestore/restoreSessions',
    'get'
  >;
  'GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/restoreSessions': Operation<
    '/solutions/backupRestore/restoreSessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 * Delete a draft restoreSessionBase object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'restoreSessionBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restoreSessions`
 *
 * Get a list of restoreSession objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/restoreSessions']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/restoreSessions']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/restoreSessions',
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
 * `GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 * Get the properties of a restoreSession object by ID.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'restoreSessionBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}',
    paramDefs: [{ name: 'restoreSessionBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/restoreSessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restoreSessions']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/restoreSessions']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restoreSessions']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/restoreSessions',
    paramDefs: [],
    params,
    body,
  };
}
