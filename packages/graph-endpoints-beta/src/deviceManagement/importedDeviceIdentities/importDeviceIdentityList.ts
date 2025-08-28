import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList': Operation<
    '/deviceManagement/importedDeviceIdentities/importDeviceIdentityList',
    'post'
  >;
}

/**
 * `POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList']['body'],
  params?: IEndpoints['POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/importedDeviceIdentities/importDeviceIdentityList']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/importedDeviceIdentities/importDeviceIdentityList',
    paramDefs: [],
    params,
    body,
  };
}
