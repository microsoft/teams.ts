import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/comanagedDevices/executeAction': Operation<
    '/deviceManagement/comanagedDevices/executeAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/comanagedDevices/executeAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/comanagedDevices/executeAction']['body'],
  params?: IEndpoints['POST /deviceManagement/comanagedDevices/executeAction']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/comanagedDevices/executeAction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/comanagedDevices/executeAction',
    paramDefs: [],
    params,
    body,
  };
}
