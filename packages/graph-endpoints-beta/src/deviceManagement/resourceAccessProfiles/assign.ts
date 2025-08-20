import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign',
    paramDefs: [{ name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' }],
    params,
    body,
  };
}
