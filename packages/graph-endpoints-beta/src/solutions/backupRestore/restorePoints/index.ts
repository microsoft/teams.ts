export * as protectionUnit from './protectionUnit';
export * as search from './search';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/restorePoints': Operation<
    '/solutions/backupRestore/restorePoints',
    'get'
  >;
  'GET /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/restorePoints': Operation<
    '/solutions/backupRestore/restorePoints',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'restorePoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/restorePoints`
 *
 * List of restore points in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/restorePoints']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/restorePoints']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restorePoints',
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
 * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 * List of restore points in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'restorePoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/restorePoints/{restorePoint-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}',
    paramDefs: [{ name: 'restorePoint-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/restorePoints`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restorePoints']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/restorePoints']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/restorePoints']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/restorePoints',
    paramDefs: [],
    params,
    body,
  };
}
