export * as recordDecisions from './recordDecisions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
    'delete'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision',
    'get'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
    'get'
  >;
  'PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
    'patch'
  >;
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision',
    'post'
  >;
}

/**
 * `DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision`
 *
 */
export function get(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision',
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
 * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
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
 * `PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['body'],
  params?: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}',
    paramDefs: [
      { name: 'approvalWorkflowProvider-id', in: 'path' },
      { name: 'businessFlow-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision']['body'],
  params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision']['parameters']
): EndpointRequest<
  IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision',
    paramDefs: [{ name: 'approvalWorkflowProvider-id', in: 'path' }],
    params,
    body,
  };
}
