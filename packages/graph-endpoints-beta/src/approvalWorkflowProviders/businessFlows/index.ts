export * as recordDecisions from './recordDecisions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    'delete'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows',
    'get'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    'get'
  >;
  'PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    'patch'
  >;
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows',
    'post'
  >;
}

/**
 * `DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows`
 *
 */
export function list(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['body'],
  params?: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}',
    paramDefs: [
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows']['body'],
  params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows']['parameters']
): EndpointRequest<
  IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows',
    paramDefs: [{ name: 'approvalWorkflowProvider-id', in: 'path' }],
    params,
    body,
  };
}
