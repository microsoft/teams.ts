import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'delete'
  >;
  'GET /deviceManagement/remoteActionAudits': Operation<
    '/deviceManagement/remoteActionAudits',
    'get'
  >;
  'GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'get'
  >;
  'PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}': Operation<
    '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    'patch'
  >;
  'POST /deviceManagement/remoteActionAudits': Operation<
    '/deviceManagement/remoteActionAudits',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteActionAudit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/remoteActionAudits`
 *
 * The list of device remote action audits with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/remoteActionAudits']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/remoteActionAudits']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/remoteActionAudits',
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
 * `GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
 *
 * The list of device remote action audits with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteActionAudit-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/remoteActionAudits/{remoteActionAudit-id}',
    paramDefs: [{ name: 'remoteActionAudit-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/remoteActionAudits`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/remoteActionAudits']['body'],
  params?: IEndpoints['POST /deviceManagement/remoteActionAudits']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/remoteActionAudits']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/remoteActionAudits',
    paramDefs: [],
    params,
    body,
  };
}
