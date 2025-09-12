import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing`
   *
   * If the request is from an eligible administrator to activate a role, this parameter shows the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const appScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope`
   *
   * The directory object that is the scope of the role eligibility or assignment. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};
