import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/deviceEnrollmentConfigurations/hasPayloadLinks': Operation<
    '/me/deviceEnrollmentConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /me/deviceEnrollmentConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/deviceEnrollmentConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
