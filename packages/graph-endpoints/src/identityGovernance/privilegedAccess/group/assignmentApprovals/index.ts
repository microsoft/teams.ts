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
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages',
    'get'
  >;
  'POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages',
    'post'
  >;
  'GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
    'get'
  >;
  'PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
    'patch'
  >;
  'DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
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
    method: 'post',
    path: '/identityGovernance/privilegedAccess/group/assignmentApprovals',
    body,
  };
}

export const stages = {
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages`
   *
   * A collection of stages in the approval decision.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages']['body'],
    params?: IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   * A collection of stages in the approval decision.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/privilegedAccess/group/assignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
    };
  },
};
