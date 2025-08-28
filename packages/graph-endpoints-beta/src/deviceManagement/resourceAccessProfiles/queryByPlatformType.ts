import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/resourceAccessProfiles/queryByPlatformType': Operation<
    '/deviceManagement/resourceAccessProfiles/queryByPlatformType',
    'post'
  >;
}

/**
 * `POST /deviceManagement/resourceAccessProfiles/queryByPlatformType`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/queryByPlatformType']['body'],
  params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles/queryByPlatformType']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/resourceAccessProfiles/queryByPlatformType']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/resourceAccessProfiles/queryByPlatformType',
    paramDefs: [],
    params,
    body,
  };
}
