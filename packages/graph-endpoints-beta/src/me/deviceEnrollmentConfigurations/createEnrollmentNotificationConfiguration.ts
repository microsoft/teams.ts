import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration': Operation<
    '/me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    'post'
  >;
}

/**
 * `POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    paramDefs: [],
    params,
    body,
  };
}
