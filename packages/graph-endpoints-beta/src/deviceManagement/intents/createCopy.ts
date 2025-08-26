import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/createCopy',
    'post'
  >;
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/createCopy']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/createCopy',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
