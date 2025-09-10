import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope',
    'get'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests`
 *
 * Requests for active role assignments to principals through PIM.
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * Requests for active role assignments to principals through PIM.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing`
   *
   * If the request is from an eligible administrator to activate a role, this parameter will show the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand and $select nested in $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/activatedUsing',
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
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the assignment is scoped to an app. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/appScope',
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
   * `POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel`
   *
   * Immediately cancel a unifiedRoleAssignmentScheduleRequest object that is in a Granted status, and have the system automatically delete the canceled request after 30 days. After calling this action, the status of the canceled unifiedRoleAssignmentScheduleRequest changes to Canceled.
   */
  create: function create(
    params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['response']
  > {
    return {
      method: 'post',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
      paramDefs: {
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment. Read-only. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
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
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment through the request. Supports $expand and $select nested in $expand for id only.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/principal',
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
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition`
   *
   * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand and $select nested in $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
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
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule`
   *
   * The schedule for an eligible role assignment that is referenced through the targetScheduleId property. Supports $expand and $select nested in $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/targetSchedule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleRequest-id'],
      },
      params,
    };
  },
};
