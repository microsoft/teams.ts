export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests',
    'post'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'patch'
  >;
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'delete'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests`
 *
 * The collection of role assignment requests for the resource.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 * The collection of role assignment requests for the resource.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id', 'governanceRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
      paramDefs: {
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource`
   *
   * Read-only. The resource that the request aims to.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   * Read-only. The user/group principal.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['body'],
    params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
    };
  },
};

export const updateRequest = {
  /**
   * `POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['body'],
    params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
      paramDefs: {
        path: [
          'privilegedAccess-id',
          'governanceResource-id',
          'governanceRoleAssignmentRequest-id',
        ],
      },
      params,
      body,
    };
  },
};
