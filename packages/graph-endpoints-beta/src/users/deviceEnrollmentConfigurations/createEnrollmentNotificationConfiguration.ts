import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
