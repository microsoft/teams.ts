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
  'POST /deviceManagement/windowsAutopilotSettings/sync': Operation<
    '/deviceManagement/windowsAutopilotSettings/sync',
    'post'
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotSettings']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/windowsAutopilotSettings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotSettings',
    body,
  };
}

export const sync = {
  /**
   * `POST /deviceManagement/windowsAutopilotSettings/sync`
   *
   * Initiates a sync of all AutoPilot registered devices from Store for Business and other portals. If the sync successful, this action returns a 204 No Content response code. If a sync is already in progress, the action returns a 409 Conflict response code.  If this sync action is called within 10 minutes of the previous sync, the action returns a 429 Too Many Requests response code.
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotSettings/sync']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotSettings/sync',
    };
  },
};
