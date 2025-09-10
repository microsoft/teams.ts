export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'delete'
  >;
  'GET /governanceRoleAssignmentRequests': Operation<'/governanceRoleAssignmentRequests', 'get'>;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    'patch'
  >;
  'POST /governanceRoleAssignmentRequests': Operation<'/governanceRoleAssignmentRequests', 'post'>;
  'POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
    'post'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
    'get'
  >;
  'GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'get'
  >;
  'PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'patch'
  >;
  'DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
    'delete'
  >;
  'POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest': Operation<
    '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
    'post'
  >;
}

/**
 * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceRoleAssignmentRequest-id'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests']['parameters']
): EndpointRequest<IEndpoints['GET /governanceRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['governanceRoleAssignmentRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['body'],
  params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}',
    paramDefs: {
      path: ['governanceRoleAssignmentRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceRoleAssignmentRequests`
 *
 */
export function create(
  body: IEndpoints['POST /governanceRoleAssignmentRequests']['body']
): EndpointRequest<IEndpoints['POST /governanceRoleAssignmentRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceRoleAssignmentRequests',
    body,
  };
}

export const cancel = {
  /**
   * `POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/cancel',
      paramDefs: {
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource`
   *
   * Read-only. The resource that the request aims to.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const subject = {
  /**
   * `GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   * Read-only. The user/group principal.
   */
  get: function get(
    params?: IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['body'],
    params?: IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/subject',
      paramDefs: {
        header: ['If-Match'],
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
    };
  },
};

export const updateRequest = {
  /**
   * `POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest`
   *
   */
  create: function create(
    body: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['body'],
    params?: IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/updateRequest',
      paramDefs: {
        path: ['governanceRoleAssignmentRequest-id'],
      },
      params,
      body,
    };
  },
};
