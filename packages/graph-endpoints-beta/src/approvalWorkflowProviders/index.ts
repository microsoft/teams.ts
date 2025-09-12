export * as businessFlows from './businessFlows';
export * as businessFlowsWithRequestsAwaitingMyDecision from './businessFlowsWithRequestsAwaitingMyDecision';

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
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    'get'
  >;
  'POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
    'post'
  >;
  'GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'get'
  >;
  'PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'patch'
  >;
  'DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}': Operation<
    '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
    'delete'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['approvalWorkflowProvider-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['approvalWorkflowProvider-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /approvalWorkflowProviders`
 *
 */
export function create(
  body: IEndpoints['POST /approvalWorkflowProviders']['body']
): EndpointRequest<IEndpoints['POST /approvalWorkflowProviders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/approvalWorkflowProviders',
    body,
  };
}

export const policyTemplates = {
  /**
   * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates`
   *
   */
  list: function list(
    params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approvalWorkflowProvider-id'],
      },
      params,
    };
  },
  /**
   * `POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates`
   *
   */
  create: function create(
    body: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['body'],
    params?: IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates',
      paramDefs: {
        path: ['approvalWorkflowProvider-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approvalWorkflowProvider-id', 'governancePolicyTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['body'],
    params?: IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
      paramDefs: {
        path: ['approvalWorkflowProvider-id', 'governancePolicyTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/approvalWorkflowProviders/{approvalWorkflowProvider-id}/policyTemplates/{governancePolicyTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approvalWorkflowProvider-id', 'governancePolicyTemplate-id'],
      },
      params,
    };
  },
};
