import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
