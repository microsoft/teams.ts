export * as activate from './activate';
export * as deactivate from './deactivate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/serviceApps': Operation<
    '/solutions/backupRestore/serviceApps',
    'get'
  >;
  'GET /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/serviceApps': Operation<
    '/solutions/backupRestore/serviceApps',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 * Delete a serviceApp.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/serviceApps`
 *
 * Get a list of serviceApp objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/serviceApps']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore/serviceApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/serviceApps',
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
 * `GET /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 * Read the properties and relationships of a serviceApp object.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/serviceApps/{serviceApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}',
    paramDefs: [{ name: 'serviceApp-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/serviceApps`
 *
 * Create a new serviceApp.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/serviceApps']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/serviceApps']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/serviceApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/serviceApps',
    paramDefs: [],
    params,
    body,
  };
}
