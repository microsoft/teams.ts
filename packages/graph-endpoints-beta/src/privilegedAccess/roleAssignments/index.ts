export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/roleAssignments': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    'post'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
  'DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments`
 *
 * A collection of role assignments for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    paramDefs: {
      path: ['privilegedAccess-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 * A collection of role assignments for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments',
    paramDefs: {
      path: ['privilegedAccess-id'],
    },
    params,
    body,
  };
}

export const linkedEligibleRoleAssignment = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment`
   *
   * Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource`
   *
   * Read-only. The resource associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   * Read-only. The subject associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['body'],
    params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedAccess/{privilegedAccess-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: ['privilegedAccess-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
