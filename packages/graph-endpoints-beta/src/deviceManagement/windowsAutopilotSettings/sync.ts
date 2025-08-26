import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/windowsAutopilotSettings/sync': Operation<
    '/deviceManagement/windowsAutopilotSettings/sync',
    'post'
  >;
}

/**
 * `POST /deviceManagement/windowsAutopilotSettings/sync`
 *
 * Initiates a sync of all AutoPilot registered devices from Store for Business and other portals. If the sync successful, this action returns a 204 No Content response code. If a sync is already in progress, the action returns a 409 Conflict response code.  If this sync action is called within 10 minutes of the previous sync, the action returns a 429 Too Many Requests response code.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotSettings/sync']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotSettings/sync']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsAutopilotSettings/sync']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotSettings/sync',
    paramDefs: [],
    params,
    body,
  };
}
