import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign`
 *
 * Not yet documented
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assign',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
