import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/allMembers': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers',
    'get'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/allMembers': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/allMembers/add': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers/add',
    'post'
  >;
  'POST /groups/{group-id}/team/channels/{channel-id}/allMembers/remove': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/allMembers/remove',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'channel-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/allMembers`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/allMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/allMembers/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'channel-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/allMembers',
    paramDefs: {
      path: ['group-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/allMembers/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/add']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/allMembers/add',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /groups/{group-id}/team/channels/{channel-id}/allMembers/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/remove']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/allMembers/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/channels/{channel-id}/allMembers/remove',
      paramDefs: {
        path: ['group-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};
