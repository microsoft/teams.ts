import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleEligibilityScheduleRequests': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests',
    'post'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope',
    'get'
  >;
  'POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel',
    'post'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleEligibilityScheduleRequest-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilityScheduleRequests`
 *
 * Get a list of the unifiedRoleEligibilityScheduleRequest objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * Read the properties and relationships of an unifiedRoleEligibilityScheduleRequest object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleEligibilityScheduleRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: {
      path: ['unifiedRoleEligibilityScheduleRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleEligibilityScheduleRequests`
 *
 * Create a new unifiedRoleEligibilityScheduleRequest object. This operation allows both admins and eligible users to add, revoke, or extend eligible assignments.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests',
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope`
   *
   * Read-only property with details of the app-specific scope when the role eligibility is scoped to an app. Nullable. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const cancel = {
  /**
   * `POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel`
   *
   * Immediately cancel a unifiedRoleEligibilityScheduleRequest that is in a Granted status, and have the system automatically delete the cancelled request after 30 days. After calling this action, the status of the cancelled unifiedRoleEligibilityScheduleRequest changes to Revoked.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel',
      paramDefs: {
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope`
   *
   * The directory object that is the scope of the role eligibility. Read-only. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal`
   *
   * The principal that&#x27;s getting a role eligibility through the request. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition`
   *
   * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};

export const targetSchedule = {
  /**
   * `GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule`
   *
   * The schedule for a role eligibility that is referenced through the targetScheduleId property. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleEligibilityScheduleRequest-id'],
      },
      params,
    };
  },
};
