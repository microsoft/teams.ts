import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/hasPayloadLinks',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
