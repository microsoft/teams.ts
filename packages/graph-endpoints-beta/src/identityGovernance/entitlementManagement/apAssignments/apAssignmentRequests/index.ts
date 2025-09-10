export * as requestor from './requestor';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel',
    'post'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess',
    'post'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume': Operation<
    '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests']['body'],
  params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests',
    paramDefs: {
      path: ['accessPackageAssignment-id'],
    },
    params,
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage`
   *
   * The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const accessPackageAssignment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment`
   *
   * For a requestType of UserAdd or AdminAdd, an access package assignment requested to be created. For a requestType of UserRemove, AdminRemove, or SystemRemove, this property has the id property of an existing assignment to be removed. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/accessPackageAssignment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel`
   *
   * In Microsoft Entra Entitlement Management, cancel accessPackageAssignmentRequest objects that are in a cancelable state: accepted, pendingApproval, pendingNotBefore, pendingApprovalEscalated.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/cancel',
      paramDefs: {
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const reprocess = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess`
   *
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/reprocess',
      paramDefs: {
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const resume = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume`
   *
   * Resume a user&#x27;s access package request after waiting for a callback from a custom extension. In Microsoft Entra entitlement management, when an access package policy has been enabled to call out a custom extension and the request processing is waiting for the callback from the customer, the customer can initiate a resume action. It&#x27;s performed on an accessPackageAssignmentRequest object whose requestStatus is in a WaitingForCallback state.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment-id}/accessPackageAssignmentRequests/{accessPackageAssignmentRequest-id}/resume',
      paramDefs: {
        path: ['accessPackageAssignment-id', 'accessPackageAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
};
