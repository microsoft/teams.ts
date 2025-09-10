import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'conversationMember-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members`
 *
 * Members and owners of the team.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}`
 *
 * Members and owners of the team.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'conversationMember-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'conversationMember-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

export const add = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add`
   *
   * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/add',
      paramDefs: {
        path: ['teamTemplateDefinition-id'],
      },
      params,
      body,
    };
  },
};

export const remove = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove`
   *
   * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/remove',
      paramDefs: {
        path: ['teamTemplateDefinition-id'],
      },
      params,
      body,
    };
  },
};
