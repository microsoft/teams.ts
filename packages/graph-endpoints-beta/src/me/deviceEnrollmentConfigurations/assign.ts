import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
