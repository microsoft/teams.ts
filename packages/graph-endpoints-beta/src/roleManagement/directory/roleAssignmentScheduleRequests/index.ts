import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests',
    'post'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope',
    'get'
  >;
  'POST /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
    'post'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentScheduleRequests`
 *
 * Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * In PIM, read the details of a request for an active and persistent role assignment made through the unifiedRoleAssignmentScheduleRequest object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentScheduleRequests`
 *
 * Create a new unifiedRoleAssignmentScheduleRequest object. This operation allows both admins and users to add, remove, extend, or renew assignments. To run this request, the calling user must have multifactor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Microsoft Entra multifactor authentication to secure sign-in events.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing`
   *
   * If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand and $select nested in $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const appScope = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
   * `POST /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel`
   *
   * Immediately cancel a unifiedRoleAssignmentScheduleRequest object that is in a Granted status, and have the system automatically delete the canceled request after 30 days. After calling this action, the status of the canceled unifiedRoleAssignmentScheduleRequest changes to Canceled.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
      paramDefs: {
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment. Read-only. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment through the request. Supports $expand and $select nested in $expand for id only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition`
   *
   * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand and $select nested in $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const targetSchedule = {
  /**
   * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule`
   *
   * The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand and $select nested in $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};
