import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/updateSettings',
    'post'
  >;
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/updateSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/updateSettings',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
