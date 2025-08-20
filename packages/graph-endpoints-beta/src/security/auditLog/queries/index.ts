export * as records from './records';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'delete'
  >;
  'GET /security/auditLog/queries': Operation<'/security/auditLog/queries', 'get'>;
  'GET /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'get'
  >;
  'PATCH /security/auditLog/queries/{auditLogQuery-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}',
    'patch'
  >;
  'POST /security/auditLog/queries': Operation<'/security/auditLog/queries', 'post'>;
}

/**
 * `DELETE /security/auditLog/queries/{auditLogQuery-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'auditLogQuery-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/auditLog/queries`
 *
 * Get a list of auditLogQuery objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/auditLog/queries']['parameters']
): EndpointRequest<IEndpoints['GET /security/auditLog/queries']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries',
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
 * `GET /security/auditLog/queries/{auditLogQuery-id}`
 *
 * Read the properties and relationships of an auditLogQuery object.
 */
export function get(
  params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'auditLogQuery-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/auditLog/queries/{auditLogQuery-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['body'],
  params?: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/auditLog/queries/{auditLogQuery-id}',
    paramDefs: [{ name: 'auditLogQuery-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/auditLog/queries`
 *
 * Create a new auditLogQuery object.
 */
export function create(
  body: IEndpoints['POST /security/auditLog/queries']['body'],
  params?: IEndpoints['POST /security/auditLog/queries']['parameters']
): EndpointRequest<IEndpoints['POST /security/auditLog/queries']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/auditLog/queries',
    paramDefs: [],
    params,
    body,
  };
}
