import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment or role eligibility. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or role eligibility through the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleEligibilityScheduleInstance-id'],
      },
      params,
    };
  },
};
