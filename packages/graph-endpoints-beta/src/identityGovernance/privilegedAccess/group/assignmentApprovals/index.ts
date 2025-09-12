import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals',
    'get'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentApprovals': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/privilegedAccess/group/assignmentApprovals`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals',
    body,
  };
}

export const steps = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
