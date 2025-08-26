import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    paramDefs: [],
    params,
    body,
  };
}
