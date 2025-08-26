import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion`
 *
 * Update the Proprietary Device Health Script
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
