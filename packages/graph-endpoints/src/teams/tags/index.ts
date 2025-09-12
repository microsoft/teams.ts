import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /teams/{team-id}/tags': Operation<'/teams/{team-id}/tags', 'get'>;
  'GET /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /teams/{team-id}/tags': Operation<'/teams/{team-id}/tags', 'post'>;
  'GET /teams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /teams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Delete a tag object permanently.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/tags`
 *
 * Get a list of the tag objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/tags',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Read the properties and relationships of a tag object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['team-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Update the properties of a tag object.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['team-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/tags`
 *
 * Create a standard tag for members in a team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/tags']['body'],
  params?: IEndpoints['POST /teams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/tags']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/tags',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /teams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Get a list of the members of a standard tag in a team and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['response']> {
    return {
      method: 'get',
      path: '/teams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/tags/{teamworkTag-id}/members`
   *
   * Create a new teamworkTagMember object in a team.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['team-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Get the properties and relationships of a member of a standard tag in a team.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Delete a member from a standard tag in a team.
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
};
