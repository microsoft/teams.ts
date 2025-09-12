import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentApprovals': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    body,
  };
}

export const steps = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
