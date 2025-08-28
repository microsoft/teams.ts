import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities': Operation<
    '/deviceManagement/importedDeviceIdentities/searchExistingIdentities',
    'post'
  >;
}

/**
 * `POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/importedDeviceIdentities/searchExistingIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/importedDeviceIdentities/searchExistingIdentities',
    paramDefs: [],
    params,
    body,
  };
}
