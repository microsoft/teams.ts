import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcAuditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/auditEvents`
 *
 * List all the cloudPcAuditEvent objects for the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/auditEvents',
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
 * `GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
 *
 * Read the properties and relationships of a cloudPcAuditEvent object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcAuditEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    paramDefs: [{ name: 'cloudPcAuditEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/auditEvents`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/auditEvents',
    paramDefs: [],
    params,
    body,
  };
}
