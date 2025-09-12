import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentRequests': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    'patch'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentRequests': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage',
    'get'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel',
    'post'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess',
    'post'
  >;
  'GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume': Operation<
    '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 * Delete an accessPackageAssignmentRequest object. This request can be made to remove a denied or completed request.  You cannot delete an access package assignment request if it has any accessPackageAssignment objects.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessPackageAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/assignmentRequests`
 *
 * In Microsoft Entra entitlement management, retrieve a list of accessPackageAssignmentRequest objects.  The resulting list includes all the assignment requests, current and well as expired, that the caller has access to read, across all catalogs and access packages.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignmentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 * In Microsoft Entra entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      path: ['accessPackageAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}',
    paramDefs: {
      path: ['accessPackageAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/entitlementManagement/assignmentRequests`
 *
 * In Microsoft Entra Entitlement Management, create a new accessPackageAssignmentRequest object. This operation is used to assign a user to an access package, update the assignment, or to remove an access package assignment.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/entitlementManagement/assignmentRequests',
    body,
  };
}

export const accessPackage = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage`
   *
   * The access package associated with the accessPackageAssignmentRequest. An access package defines the collections of resource roles and the policies for how one or more users can get access to those resources. Read-only. Nullable.  Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/accessPackage',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const assignment = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment`
   *
   * For a requestType of userAdd or adminAdd, this is an access package assignment requested to be created. For a requestType of userRemove, adminRemove or systemRemove, this has the id property of an existing assignment to be removed.   Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/assignment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
   * `POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel`
   *
   * In Microsoft Entra Entitlement Management, cancel accessPackageAssignmentRequest objects that are in a cancellable state: accepted, pendingApproval, pendingNotBefore, pendingApprovalEscalated.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/cancel',
      paramDefs: {
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const reprocess = {
  /**
   * `POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess`
   *
   * In Microsoft Entra entitlement management, callers can automatically retry a user&#x27;s request for access to an access package. It&#x27;s performed on an accessPackageAssignmentRequest object whose requestState is in a DeliveryFailed or PartiallyDelivered state.  You can only reprocess a request within 14 days from the time the original request was completed. For requests completed more than 14 days, you will need to ask the users to cancel the request(s) and make a new request in the MyAccess portal.
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/reprocess',
      paramDefs: {
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const requestor = {
  /**
   * `GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor`
   *
   * The subject who requested or, if a direct assignment, was assigned. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/requestor',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const resume = {
  /**
   * `POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume`
   *
   * Resume a user&#x27;s access package request after waiting for a callback from a custom extension. In Microsoft Entra entitlement management, when an access package policy has been enabled to call out a custom extension and the request processing is waiting for the callback from the customer, the customer can initiate a resume action. It&#x27;s performed on an accessPackageAssignmentRequest object whose requestStatus is in a WaitingForCallback state.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume']['body'],
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume']['response']
  > {
    return {
      method: 'post',
      path: '/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest-id}/resume',
      paramDefs: {
        path: ['accessPackageAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
};
