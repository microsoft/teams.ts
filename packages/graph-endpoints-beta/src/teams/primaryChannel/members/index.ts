import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/members': Operation<
    '/teams/{team-id}/primaryChannel/members',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/members': Operation<
    '/teams/{team-id}/primaryChannel/members',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/members/add': Operation<
    '/teams/{team-id}/primaryChannel/members/add',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/members/remove': Operation<
    '/teams/{team-id}/primaryChannel/members/remove',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/members']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/members`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/members']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/members',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teams/{team-id}/primaryChannel/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/members/add',
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
   * `POST /teams/{team-id}/primaryChannel/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/members/remove']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/members/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/members/remove',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};
