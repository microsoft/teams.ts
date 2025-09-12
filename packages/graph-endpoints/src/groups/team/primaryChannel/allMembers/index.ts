import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/allMembers': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/allMembers': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/allMembers/add': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/add',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/allMembers/remove': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/allMembers',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel, including both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/allMembers',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/add']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/add']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/allMembers/add',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/remove']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers/remove']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/allMembers/remove',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};
