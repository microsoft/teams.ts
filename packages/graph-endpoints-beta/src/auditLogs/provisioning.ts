import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'delete'
  >;
  'GET /auditLogs/provisioning': Operation<'/auditLogs/provisioning', 'get'>;
  'GET /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'get'
  >;
  'PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}': Operation<
    '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    'patch'
  >;
  'POST /auditLogs/provisioning': Operation<'/auditLogs/provisioning', 'post'>;
}

/**
 * `DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'provisioningObjectSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /auditLogs/provisioning`
 *
 * Get all provisioning events that occurred in your tenant, such as the deletion of a group in a target application or the creation of a user when provisioning user accounts from your HR system.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/provisioning']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/provisioning']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/provisioning',
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
 * `GET /auditLogs/provisioning/{provisioningObjectSummary-id}`
 *
 * Represents an action performed by the Microsoft Entra provisioning service and its associated properties.
 */
export function get$1(
  params?: IEndpoints['GET /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'provisioningObjectSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['body'],
  params?: IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /auditLogs/provisioning/{provisioningObjectSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs/provisioning/{provisioningObjectSummary-id}',
    paramDefs: [{ name: 'provisioningObjectSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /auditLogs/provisioning`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/provisioning']['body'],
  params?: IEndpoints['POST /auditLogs/provisioning']['parameters']
): EndpointRequest<IEndpoints['POST /auditLogs/provisioning']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/provisioning',
    paramDefs: [],
    params,
    body,
  };
}
