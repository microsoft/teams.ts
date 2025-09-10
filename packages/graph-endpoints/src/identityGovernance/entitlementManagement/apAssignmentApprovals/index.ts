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
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
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
  * Retrieve the properties of an approval object. This API request is made by an approver in the following scenarios: In Microsoft Entra entitlement management, providing the identifier of the access package assignment request.
In PIM for Groups, providing the identifier of the assignment schedule request.
  */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals']['response']
> {
  return {
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
  * Retrieve the properties of an approval object. This API request is made by an approver in the following scenarios: In Microsoft Entra entitlement management, providing the identifier of the access package assignment request.
In PIM for Groups, providing the identifier of the assignment schedule request.
  */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}']['response']
> {
  return {
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
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals',
    body,
  };
}

export const stages = {
  /**
  * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages`
  *
  * List the approvalStage objects associated with an approval. This API request is made by an approver in the following scenarios: In Microsoft Entra entitlement management, providing the identifier of the access package assignment request.
In PIM for Groups, providing the identifier of the assignment schedule request.
  */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['approval-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages',
      paramDefs: {
        path: ['approval-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   * Retrieve the properties of an approvalStage object. An approval stage is contained within an approval object.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   * Approve or deny an approvalStage object in an approval.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval-id}/stages/{approvalStage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['approval-id', 'approvalStage-id'],
      },
      params,
    };
  },
};
