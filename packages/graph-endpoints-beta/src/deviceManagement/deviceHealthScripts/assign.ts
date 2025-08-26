import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign',
    paramDefs: [{ name: 'deviceHealthScript-id', in: 'path' }],
    params,
    body,
  };
}
