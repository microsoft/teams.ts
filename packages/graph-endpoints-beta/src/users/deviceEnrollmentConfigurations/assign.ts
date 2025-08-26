import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}
