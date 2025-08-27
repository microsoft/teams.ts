import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/revokeToken',
    paramDefs: [{ name: 'androidForWorkEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
