export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /governanceResources/{governanceResource-id}/roleAssignmentRequests': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests',
    'post'
  >;
  'POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    'get'
  >;
  'GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'patch'
  >;
  'DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'delete'
  >;
  'POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest': Operation<
    '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
    'post'
  >;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests`
 *
 * The collection of role assignment requests for the resource.
 */
export function list(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests',
    paramDefs: {
      path: ['governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 * The collection of role assignment requests for the resource.
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceResources/{governanceResource-id}/roleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests']['body'],
  params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests',
    paramDefs: {
      path: ['governanceResource-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
      paramDefs: {
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource`
   *
   * Read-only. The resource that the request aims to.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   * Read-only. The user/group principal.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['body'],
    params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const updateRequest = {
  /**
   * `POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['body'],
    params?: IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
      paramDefs: {
        path: ['governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
};
