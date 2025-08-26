import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/setPriority',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
