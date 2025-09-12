import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['approval-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals`
 *
 * Retrieve the properties of an approval object. This API request is made by an approver in the following scenarios:
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}`
 *
 * Retrieve the properties of an approval object. This API request is made by an approver in the following scenarios:
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}',
    paramDefs: {
      path: ['approval-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals',
    body,
  };
}

export const steps = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps`
   *
   * List the approvalStep objects associated with an approval. This API request is made by an approver in the following scenarios:
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Retrieve the properties of an approvalStep object.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   * Apply approve or deny decision on an approvalStep object.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStep-id'],
      },
      params,
    };
  },
};
