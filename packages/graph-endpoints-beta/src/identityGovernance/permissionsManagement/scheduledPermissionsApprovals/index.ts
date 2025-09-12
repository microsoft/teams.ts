import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    'delete'
  >;
  'GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals',
    'get'
  >;
  'GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    'patch'
  >;
  'POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals',
    'post'
  >;
  'GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals',
    body,
  };
}

export const steps = {
  /**
   * `GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/permissionsManagement/scheduledPermissionsApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
