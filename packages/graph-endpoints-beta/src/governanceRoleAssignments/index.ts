export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'delete'
  >;
  'GET /governanceRoleAssignments': Operation<'/governanceRoleAssignments', 'get'>;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    'patch'
  >;
  'POST /governanceRoleAssignments': Operation<'/governanceRoleAssignments', 'post'>;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
    'get'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/resource',
    'get'
  >;
  'GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'get'
  >;
  'PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'patch'
  >;
  'DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject': Operation<
    '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
    'delete'
  >;
}

/**
 * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignments`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['governanceRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignments/{governanceRoleAssignment-id}',
    paramDefs: {
      path: ['governanceRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceRoleAssignments`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignments']['body']
): EndpointRequest<IEndpoints['POST /governanceRoleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignments',
    body,
  };
}

export const linkedEligibleRoleAssignment = {
  /**
   * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment`
   *
   * Read-only. If this is an active assignment and created due to activation on an eligible assignment, it represents the object of that eligible assignment; Otherwise, the value is null.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/linkedEligibleRoleAssignment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource`
   *
   * Read-only. The resource associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
   *
   * Read-only. The subject associated with the role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['body'],
    params?: IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        path: ['governanceRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /governanceRoleAssignments/{governanceRoleAssignment-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/governanceRoleAssignments/{governanceRoleAssignment-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: ['governanceRoleAssignment-id'],
      },
      params,
    };
  },
};
