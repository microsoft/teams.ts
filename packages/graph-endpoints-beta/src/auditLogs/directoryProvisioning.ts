import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'delete'
  >;
  'GET /auditLogs/directoryProvisioning': Operation<'/auditLogs/directoryProvisioning', 'get'>;
  'GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'get'
  >;
  'PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    'patch'
  >;
  'POST /auditLogs/directoryProvisioning': Operation<'/auditLogs/directoryProvisioning', 'post'>;
}

/**
 * `DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'provisioningObjectSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /auditLogs/directoryProvisioning`
 *
 */
export function get(
  params?: IEndpoints['GET /auditLogs/directoryProvisioning']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/directoryProvisioning']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/directoryProvisioning',
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
 * `GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'provisioningObjectSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['body'],
  params?: IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /auditLogs/directoryProvisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs/directoryProvisioning/{provisioningObjectSummary-id}',
    paramDefs: [{ name: 'provisioningObjectSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /auditLogs/directoryProvisioning`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/directoryProvisioning']['body'],
  params?: IEndpoints['POST /auditLogs/directoryProvisioning']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/directoryProvisioning']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/directoryProvisioning',
    paramDefs: [],
    params,
    body,
  };
}
