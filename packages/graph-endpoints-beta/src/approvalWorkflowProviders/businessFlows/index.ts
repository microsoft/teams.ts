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
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions',
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
    paramDefs: {
      header: ['If-Match'],
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
    },
    params,
    body,
  };
}

export const recordDecisions = {
  /**
   * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['body'],
    params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/recordDecisions',
      paramDefs: {
        path: ['approvalWorkflowProvider-id', 'businessFlow-id'],
      },
      params,
      body,
    };
  },
};
