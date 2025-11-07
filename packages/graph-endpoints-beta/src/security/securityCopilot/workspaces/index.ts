export * as sessions from './sessions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityCopilot/workspaces/{workspace-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}',
    'delete'
  >;
  'GET /security/securityCopilot/workspaces': Operation<
    '/security/securityCopilot/workspaces',
    'get'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}',
    'get'
  >;
  'PATCH /security/securityCopilot/workspaces/{workspace-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}',
    'patch'
  >;
  'POST /security/securityCopilot/workspaces': Operation<
    '/security/securityCopilot/workspaces',
    'post'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/plugins': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/plugins',
    'get'
  >;
  'POST /security/securityCopilot/workspaces/{workspace-id}/plugins': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/plugins',
    'post'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
    'get'
  >;
  'PATCH /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
    'patch'
  >;
  'DELETE /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
    'delete'
  >;
}

/**
 * `DELETE /security/securityCopilot/workspaces/{workspace-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityCopilot/workspaces/{workspace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workspace-id'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces`
 *
 * Get a list of the workspace objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/securityCopilot/workspaces']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityCopilot/workspaces']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces/{workspace-id}`
 *
 * References a workspace in Security Copilot.
 */
export function get(
  params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces/{workspace-id}',
    paramDefs: {
      path: ['workspace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/securityCopilot/workspaces/{workspace-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}']['body'],
  params?: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityCopilot/workspaces/{workspace-id}',
    paramDefs: {
      path: ['workspace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/securityCopilot/workspaces`
 *
 */
export function create(
  body: IEndpoints['POST /security/securityCopilot/workspaces']['body']
): EndpointRequest<IEndpoints['POST /security/securityCopilot/workspaces']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityCopilot/workspaces',
    body,
  };
}

export const plugins = {
  /**
   * `GET /security/securityCopilot/workspaces/{workspace-id}/plugins`
   *
   * Represents plugins in Security Copilot.
   */
  list: function list(
    params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/plugins']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/plugins']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/securityCopilot/workspaces/{workspace-id}/plugins',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workspace-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/securityCopilot/workspaces/{workspace-id}/plugins`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/plugins']['body'],
    params?: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/plugins']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/plugins']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/securityCopilot/workspaces/{workspace-id}/plugins',
      paramDefs: {
        path: ['workspace-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}`
   *
   * Represents plugins in Security Copilot.
   */
  get: function get(
    params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workspace-id', 'plugin-name'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['body'],
    params?: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
      paramDefs: {
        path: ['workspace-id', 'plugin-name'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/securityCopilot/workspaces/{workspace-id}/plugins/{plugin-name}',
      paramDefs: {
        header: ['If-Match'],
        path: ['workspace-id', 'plugin-name'],
      },
      params,
    };
  },
};
