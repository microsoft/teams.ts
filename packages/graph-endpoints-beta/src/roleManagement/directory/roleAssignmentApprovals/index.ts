import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals': Operation<
    '/roleManagement/directory/roleAssignmentApprovals',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentApprovals': Operation<
    '/roleManagement/directory/roleAssignmentApprovals',
    'post'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentApprovals',
    body,
  };
}

export const steps = {
  /**
   * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
