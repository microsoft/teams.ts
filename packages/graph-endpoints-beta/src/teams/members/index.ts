import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/members': Operation<'/teams/{team-id}/members', 'get'>;
  'GET /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/members': Operation<'/teams/{team-id}/members', 'post'>;
  'POST /teams/{team-id}/members/add': Operation<'/teams/{team-id}/members/add', 'post'>;
  'POST /teams/{team-id}/members/remove': Operation<'/teams/{team-id}/members/remove', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/members/{conversationMember-id}`
 *
 * Remove a conversationMember from a team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/members`
 *
 * Get the conversationMember collection of a team. The membership IDs returned by the server must be treated as opaque strings. The client shouldn&#x27;t try to parse or make assumptions about these resource IDs. In the future, membership results can include users from various tenants, as indicated in the response. Clients should avoid assuming that all members exclusively belong to the current tenant.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/members',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/members/{conversationMember-id}`
 *
 * Get a conversationMember from a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/members/{conversationMember-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/members/{conversationMember-id}`
 *
 * Update the role of a conversationMember in a team.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: {
      path: ['team-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/members`
 *
 * Add a new conversation member to a team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/members',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teams/{team-id}/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/members/add']['body'],
    params?: IEndpoints['POST /teams/{team-id}/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/members/add']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/members/add',
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
   * `POST /teams/{team-id}/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/members/remove']['body'],
    params?: IEndpoints['POST /teams/{team-id}/members/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/members/remove']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/members/remove',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};
