export * as prompts from './prompts';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    'delete'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions',
    'get'
  >;
  'GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    'get'
  >;
  'PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    'patch'
  >;
  'POST /security/securityCopilot/workspaces/{workspace-id}/sessions': Operation<
    '/security/securityCopilot/workspaces/{workspace-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workspace-id', 'session-id'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions`
 *
 * Represents sessions in Security Copilot.
 */
export function list(
  params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions',
    paramDefs: {
      path: ['workspace-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}`
 *
 * Represents sessions in Security Copilot.
 */
export function get(
  params?: IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    paramDefs: {
      path: ['workspace-id', 'session-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['body'],
  params?: IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions/{session-id}',
    paramDefs: {
      path: ['workspace-id', 'session-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/securityCopilot/workspaces/{workspace-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions']['body'],
  params?: IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/securityCopilot/workspaces/{workspace-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/securityCopilot/workspaces/{workspace-id}/sessions',
    paramDefs: {
      path: ['workspace-id'],
    },
    params,
    body,
  };
}
