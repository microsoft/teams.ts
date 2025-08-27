import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'delete'
  >;
  'GET /security/auditLog/queries/{auditLogQuery-id}/records': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records',
    'get'
  >;
  'GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'get'
  >;
  'PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    'patch'
  >;
  'POST /security/auditLog/queries/{auditLogQuery-id}/records': Operation<
    '/security/auditLog/queries/{auditLogQuery-id}/records',
    'post'
  >;
}

/**
 * `DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'auditLogQuery-id', in: 'path' },
      { name: 'auditLogRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/auditLog/queries/{auditLogQuery-id}/records`
 *
 * Get a list of the auditLogRecord objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries/{auditLogQuery-id}/records',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'auditLogQuery-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
 *
 * An individual audit log record.
 */
export function get(
  params?: IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'auditLogQuery-id', in: 'path' },
      { name: 'auditLogRecord-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['body'],
  params?: IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/auditLog/queries/{auditLogQuery-id}/records/{auditLogRecord-id}',
    paramDefs: [
      { name: 'auditLogQuery-id', in: 'path' },
      { name: 'auditLogRecord-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/auditLog/queries/{auditLogQuery-id}/records`
 *
 */
export function create(
  body: IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['body'],
  params?: IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/auditLog/queries/{auditLogQuery-id}/records']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/auditLog/queries/{auditLogQuery-id}/records',
    paramDefs: [{ name: 'auditLogQuery-id', in: 'path' }],
    params,
    body,
  };
}
