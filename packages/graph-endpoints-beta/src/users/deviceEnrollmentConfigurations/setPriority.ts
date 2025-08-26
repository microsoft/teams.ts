import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}
