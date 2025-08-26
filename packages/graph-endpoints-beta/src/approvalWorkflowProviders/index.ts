export * as businessFlows from './businessFlows';
export * as businessFlowsWithRequestsAwaitingMyDecision from './businessFlowsWithRequestsAwaitingMyDecision';
export * as policyTemplates from './policyTemplates';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    'delete'
  >;
  'GET /approvalWorkflowProviders': Operation<'/approvalWorkflowProviders', 'get'>;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    'get'
  >;
  'PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    'patch'
  >;
  'POST /approvalWorkflowProviders': Operation<'/approvalWorkflowProviders', 'post'>;
}

/**
 * `DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders`
 *
 */
export function list(
  params?: IEndpoints['GET /approvalWorkflowProviders']['parameters']
): EndpointRequest<IEndpoints['GET /approvalWorkflowProviders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders',
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
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['body'],
  params?: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}',
    paramDefs: [{ name: 'approvalWorkflowProvider-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /approvalWorkflowProviders`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders']['body'],
  params?: IEndpoints['POST /approvalWorkflowProviders']['parameters']
): EndpointRequest<IEndpoints['POST /approvalWorkflowProviders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders',
    paramDefs: [],
    params,
    body,
  };
}
