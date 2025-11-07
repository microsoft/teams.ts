export * as workspaces from './workspaces';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/securityCopilot': Operation<'/security/securityCopilot', 'delete'>;
  'GET /security/securityCopilot': Operation<'/security/securityCopilot', 'get'>;
  'PATCH /security/securityCopilot': Operation<'/security/securityCopilot', 'patch'>;
}

/**
 * `DELETE /security/securityCopilot`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/securityCopilot']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/securityCopilot']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/securityCopilot',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/securityCopilot`
 *
 * Represents the resources related to Microsoft Security Copilot.
 */
export function get(
  params?: IEndpoints['GET /security/securityCopilot']['parameters']
): EndpointRequest<IEndpoints['GET /security/securityCopilot']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/securityCopilot',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/securityCopilot`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/securityCopilot']['body']
): EndpointRequest<IEndpoints['PATCH /security/securityCopilot']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/securityCopilot',
    body,
  };
}
