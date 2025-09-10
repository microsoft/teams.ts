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
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
    },
    params,
    body,
  };
}

export const recordDecisions = {
  /**
   * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions']['body'],
    params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/recordDecisions',
      paramDefs: {
        path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
      },
      params,
      body,
    };
  },
};
