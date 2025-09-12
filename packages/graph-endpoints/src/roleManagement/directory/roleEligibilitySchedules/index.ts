import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules': Operation<
    '/roleManagement/directory/roleEligibilitySchedules',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleEligibilitySchedules': Operation<
    '/roleManagement/directory/roleEligibilitySchedules',
    'post'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleEligibilitySchedule-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules`
 *
 * Get the unifiedRoleEligibilitySchedule resources from the roleEligibilitySchedules navigation property.
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * Retrieve the schedule for a role eligibility operation.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      path: ['unifiedRoleEligibilitySchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: {
      path: ['unifiedRoleEligibilitySchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleEligibilitySchedules`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleEligibilitySchedules']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleEligibilitySchedules']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleEligibilitySchedules',
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope`
   *
   * The directory object that is the scope of the role eligibility or assignment. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilitySchedule-id'],
      },
      params,
    };
  },
};
