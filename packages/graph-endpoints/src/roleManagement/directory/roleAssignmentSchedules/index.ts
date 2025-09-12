import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules': Operation<
    '/roleManagement/directory/roleAssignmentSchedules',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentSchedules': Operation<
    '/roleManagement/directory/roleAssignmentSchedules',
    'post'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignmentSchedule-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules`
 *
 * Get the schedules for active role assignment operations.
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 * Retrieve the schedule for an active role assignment operation.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentSchedule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentSchedule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentSchedules`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentSchedules']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentSchedules']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentSchedules',
    body,
  };
}

export const activatedUsing = {
  /**
   * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing`
   *
   * If the request is from an eligible administrator to activate a role, this parameter shows the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const appScope = {
  /**
   * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope`
   *
   * The directory object that is the scope of the role eligibility or assignment. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal`
   *
   * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition`
   *
   * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentSchedule-id'],
      },
      params,
    };
  },
};
