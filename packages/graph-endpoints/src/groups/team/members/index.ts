import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/members': Operation<'/groups/{group-id}/team/members', 'get'>;
  'GET /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/members': Operation<'/groups/{group-id}/team/members', 'post'>;
  'POST /groups/{group-id}/team/members/add': Operation<
    '/groups/{group-id}/team/members/add',
    'post'
  >;
  'POST /groups/{group-id}/team/members/remove': Operation<
    '/groups/{group-id}/team/members/remove',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/members`
 *
 * Members and owners of the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/members']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/members']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/members',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/members/{conversationMember-id}`
 *
 * Members and owners of the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
    paramDefs: {
      path: ['group-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/members`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/members']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/members']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/members']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/members',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /groups/{group-id}/team/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/members/add']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/members/add']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/members/add']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/members/add',
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
   * `POST /groups/{group-id}/team/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/members/remove']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/members/remove']['parameters']
  ): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/members/remove']['response']> {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/members/remove',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};
