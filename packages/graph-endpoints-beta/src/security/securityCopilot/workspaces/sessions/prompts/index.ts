import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    'delete'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts',
    'get'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    'get'
  >;
  'PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    'patch'
  >;
  'POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts',
    'post'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations',
    'get'
  >;
  'POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations',
    'post'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
    'get'
  >;
  'PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
    'patch'
  >;
  'DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workspace-id', 'session-id', 'prompt-id'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts`
 *
 * The collection of prompts in the session.
 */
export function list(
  params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts',
    paramDefs: {
      path: ['workspace-id', 'session-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}`
 *
 * The collection of prompts in the session.
 */
export function get(
  params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    paramDefs: {
      path: ['workspace-id', 'session-id', 'prompt-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['body'],
  params?: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}',
    paramDefs: {
      path: ['workspace-id', 'session-id', 'prompt-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts`
 *
 */
export function create(
  body: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts']['body'],
  params?: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts',
    paramDefs: {
      path: ['workspace-id', 'session-id'],
    },
    params,
    body,
  };
}

export const evaluations = {
  /**
   * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations`
   *
   * Collection of evaluations
   */
  list: function list(
    params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workspace-id', 'session-id', 'prompt-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations']['body'],
    params?: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations',
      paramDefs: {
        path: ['workspace-id', 'session-id', 'prompt-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}`
   *
   * Collection of evaluations
   */
  get: function get(
    params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workspace-id', 'session-id', 'prompt-id', 'evaluation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['body'],
    params?: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
      paramDefs: {
        path: ['workspace-id', 'session-id', 'prompt-id', 'evaluation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}/prompts/{prompt-id}/evaluations/{evaluation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['workspace-id', 'session-id', 'prompt-id', 'evaluation-id'],
      },
      params,
    };
  },
};
