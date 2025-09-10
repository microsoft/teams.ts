export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleAssignments': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments',
    'post'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
  'DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments`
 *
 * The collection of role assignments for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments',
    paramDefs: {
      path: ['governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 * The collection of role assignments for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleAssignments',
    paramDefs: {
      path: ['governanceResource-id'],
    },
    params,
    body,
  };
}

export const linkedEligibleRoleAssignment = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment`
   *
   * Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource`
   *
   * Read-only. The resource associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   * Read-only. The subject associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['body'],
    params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/governanceResources/{governanceResource-id}/roleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: ['governanceResource-id', 'governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
