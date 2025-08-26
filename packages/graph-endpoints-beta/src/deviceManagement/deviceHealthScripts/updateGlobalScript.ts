import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript`
 *
 * Update the Proprietary Device Health Script
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
