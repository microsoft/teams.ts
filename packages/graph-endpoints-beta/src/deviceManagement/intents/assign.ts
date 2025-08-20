import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/assign': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/assign',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
