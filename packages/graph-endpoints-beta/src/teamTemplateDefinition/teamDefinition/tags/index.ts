import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members`
   *
   * Users assigned to the tag.
   */
  list: function list(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Users assigned to the tag.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamTemplateDefinition-id', 'teamworkTag-id', 'teamworkTagMember-id'],
      },
      params,
    };
  },
};
