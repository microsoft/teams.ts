import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope`
   *
   * The directory object that is the scope of the role eligibility or assignment. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};
