export * as sync from './sync';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotSettings': Operation<
    '/deviceManagement/windowsAutopilotSettings',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotSettings': Operation<
    '/deviceManagement/windowsAutopilotSettings',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotSettings': Operation<
    '/deviceManagement/windowsAutopilotSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotSettings']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/windowsAutopilotSettings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotSettings`
 *
 * The Windows autopilot account settings.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotSettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsAutopilotSettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotSettings']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/windowsAutopilotSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotSettings',
    paramDefs: [],
    params,
    body,
  };
}
