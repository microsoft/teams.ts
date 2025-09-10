import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags',
    'get'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags',
    'post'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
    'get'
  >;
  'POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
    'post'
  >;
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
}

/**
 * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplate-id', 'teamTemplateDefinition-id', 'teamworkTag-id'],
    },
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags',
    paramDefs: {
      path: ['teamTemplate-id', 'teamTemplateDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['teamTemplate-id', 'teamTemplateDefinition-id', 'teamworkTag-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}',
    paramDefs: {
      path: ['teamTemplate-id', 'teamTemplateDefinition-id', 'teamworkTag-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags']['body'],
  params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags',
    paramDefs: {
      path: ['teamTemplate-id', 'teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

export const members = {
  /**
   * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members`
   *
   * Users assigned to the tag.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamTemplate-id', 'teamTemplateDefinition-id', 'teamworkTag-id'],
      },
      params,
    };
  },
  /**
   * `POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['body'],
    params?: IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members',
      paramDefs: {
        path: ['teamTemplate-id', 'teamTemplateDefinition-id', 'teamworkTag-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   * Users assigned to the tag.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'teamTemplate-id',
          'teamTemplateDefinition-id',
          'teamworkTag-id',
          'teamworkTagMember-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
    params?: IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        path: [
          'teamTemplate-id',
          'teamTemplateDefinition-id',
          'teamworkTag-id',
          'teamworkTagMember-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'teamTemplate-id',
          'teamTemplateDefinition-id',
          'teamworkTag-id',
          'teamworkTagMember-id',
        ],
      },
      params,
    };
  },
};
