export * as approvers from './approvers';
export * as collaborators from './collaborators';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'delete'
  >;
  'GET /privacy/subjectRightsRequests': Operation<'/privacy/subjectRightsRequests', 'get'>;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    'patch'
  >;
  'POST /privacy/subjectRightsRequests': Operation<'/privacy/subjectRightsRequests', 'post'>;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'get'
  >;
  'POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
    'post'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'get'
  >;
  'PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'patch'
  >;
  'DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
    'delete'
  >;
  'GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team': Operation<
    '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/team',
    'get'
  >;
}

/**
 * `DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['subjectRightsRequest-id'],
    },
    params,
  };
}

/**
 * `GET /privacy/subjectRightsRequests`
 *
 * Get a list of subjectRightsRequest objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /privacy/subjectRightsRequests']['parameters']
): EndpointRequest<IEndpoints['GET /privacy/subjectRightsRequests']['response']> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * Read the properties and relationships of a subjectRightsRequest object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}`
 *
 * Update the properties of a subjectRightsRequest object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['body'],
  params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}',
    paramDefs: {
      path: ['subjectRightsRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privacy/subjectRightsRequests`
 *
 * Create a new subjectRightsRequest object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /privacy/subjectRightsRequests']['body']
): EndpointRequest<IEndpoints['POST /privacy/subjectRightsRequests']['response']> {
  return {
    method: 'post',
    path: '/privacy/subjectRightsRequests',
    body,
  };
}

export const notes = {
  /**
   * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes`
   *
   * Get the list of authored notes assoicated with a subject rights request.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
  > {
    return {
      method: 'get',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['subjectRightsRequest-id'],
      },
      params,
    };
  },
  /**
   * `POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes`
   *
   * Create a new authoredNote object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['body'],
    params?: IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes']['response']
  > {
    return {
      method: 'post',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes',
      paramDefs: {
        path: ['subjectRightsRequest-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   * List of notes associated with the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      method: 'get',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id', 'authoredNote-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['body'],
    params?: IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
      paramDefs: {
        path: ['subjectRightsRequest-id', 'authoredNote-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/notes/{authoredNote-id}',
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
   * `GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team`
   *
   * Information about the Microsoft Teams team that was created for the request.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privacy/subjectRightsRequests/{subjectRightsRequest-id}/team']['response']
  > {
    return {
      method: 'get',
      path: '/privacy/subjectRightsRequests/{subjectRightsRequest-id}/team',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['subjectRightsRequest-id'],
      },
      params,
    };
  },
};
