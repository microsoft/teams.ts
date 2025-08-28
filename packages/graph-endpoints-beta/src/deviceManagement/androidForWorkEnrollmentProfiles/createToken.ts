import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken',
    'post'
  >;
}

/**
 * `POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}/createToken',
    paramDefs: [{ name: 'androidForWorkEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
