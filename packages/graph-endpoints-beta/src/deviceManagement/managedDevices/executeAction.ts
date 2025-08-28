import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/managedDevices/executeAction': Operation<
    '/deviceManagement/managedDevices/executeAction',
    'post'
  >;
}

/**
 * `POST /deviceManagement/managedDevices/executeAction`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/executeAction']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/executeAction']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/managedDevices/executeAction']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/executeAction',
    paramDefs: [],
    params,
    body,
  };
}
