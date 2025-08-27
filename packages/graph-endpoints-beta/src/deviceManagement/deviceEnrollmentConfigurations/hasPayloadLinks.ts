import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
