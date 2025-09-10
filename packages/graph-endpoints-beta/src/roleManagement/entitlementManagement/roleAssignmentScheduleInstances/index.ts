import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignmentScheduleInstance-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentScheduleInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing`
   *
   * If the request is from an eligible administrator to activate a role, this parameter shows the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand and $select nested in $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};

export const appScope = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment or role eligibility. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or role eligibility through the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentScheduleInstance-id'],
      },
      params,
    };
  },
};
