import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'approval-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const steps = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['rbacApplication-id', 'approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['rbacApplication-id', 'approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['rbacApplication-id', 'approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['rbacApplication-id', 'approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
