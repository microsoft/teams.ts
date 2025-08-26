import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices': Operation<
    '/deviceManagement/deviceConfigurations/getTargetedUsersAndDevices',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/getTargetedUsersAndDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/getTargetedUsersAndDevices',
    paramDefs: [],
    params,
    body,
  };
}
