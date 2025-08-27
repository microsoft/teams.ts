import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/managedDevices/executeAction': Operation<'/me/managedDevices/executeAction', 'post'>;
}

/**
 * `POST /me/managedDevices/executeAction`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/executeAction']['body'],
  params?: IEndpoints['POST /me/managedDevices/executeAction']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedDevices/executeAction']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/executeAction',
    paramDefs: [],
    params,
    body,
  };
}
