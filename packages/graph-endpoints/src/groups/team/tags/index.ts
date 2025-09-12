import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/tags': Operation<'/groups/{group-id}/team/tags', 'get'>;
  'GET /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/tags': Operation<'/groups/{group-id}/team/tags', 'post'>;
  'GET /groups/{group-id}/team/tags/{teamworkTag-id}/members': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /groups/{group-id}/team/tags/{teamworkTag-id}/members': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/tags']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/tags']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/tags',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['group-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['group-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/tags`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/tags']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/tags']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/tags']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/tags',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /groups/{group-id}/team/tags/{teamworkTag-id}/members`
   *
   * Users assigned to the tag.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/tags/{teamworkTag-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['group-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Users assigned to the tag.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: ['group-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
};
