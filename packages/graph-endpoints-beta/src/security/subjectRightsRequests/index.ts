export * as approvers from './approvers';
export * as collaborators from './collaborators';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'delete'
  >;
  'GET /security/subjectRightsRequests': Operation<'/security/subjectRightsRequests', 'get'>;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    'patch'
  >;
  'POST /security/subjectRightsRequests': Operation<'/security/subjectRightsRequests', 'post'>;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'get'
  >;
  'POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'post'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'get'
  >;
  'PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'patch'
  >;
  'DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'delete'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/team',
    'get'
  >;
}

/**
 * `DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['subjectRightsRequest-id'],
    },
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests`
 *
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['GET /security/subjectRightsRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['body'],
  params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/subjectRightsRequests`
 *
 */
export function create(
  body: IEndpoints['POST /security/subjectRightsRequests']['body']
): EndpointRequest<IEndpoints['POST /security/subjectRightsRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/subjectRightsRequests',
    body,
  };
}

export const notes = {
  /**
   * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes`
   *
   * List of notes associated with the request.
   */
  list: function list(
    params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['subjectRightsRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['body'],
    params?: IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes',
      paramDefs: {
        path: ['subjectRightsRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   * List of notes associated with the request.
   */
  get: function get(
    params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id', 'authoredNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['body'],
    params?: IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
      paramDefs: {
        path: ['subjectRightsRequest-id', 'authoredNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['subjectRightsRequest-id', 'authoredNote-id'],
      },
      params,
    };
  },
};

export const team = {
  /**
   * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team`
   *
   * Information about the Microsoft Teams team that was created for the request.
   */
  get: function get(
    params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/team']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id'],
      },
      params,
    };
  },
};
