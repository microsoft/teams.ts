import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/allMembers': Operation<
    '/teams/{team-id}/primaryChannel/allMembers',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/allMembers': Operation<
    '/teams/{team-id}/primaryChannel/allMembers',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/allMembers/add': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/add',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/allMembers/remove': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/allMembers',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/allMembers',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teams/{team-id}/primaryChannel/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/add']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/allMembers/add',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /teams/{team-id}/primaryChannel/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/allMembers/remove',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};
