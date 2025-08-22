import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration': Operation<
    '/identity/customAuthenticationExtensions/validateAuthenticationConfiguration',
    'post'
  >;
  'POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration': Operation<
    '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration',
    'post'
  >;
}

/**
 * `POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration`
 *
 */
export function create$1(
  body: IEndpoints['POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration']['body'],
  params?: IEndpoints['POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/customAuthenticationExtensions/validateAuthenticationConfiguration']['response']
> {
  return {
    method: 'post',
    path: '/identity/customAuthenticationExtensions/validateAuthenticationConfiguration',
    paramDefs: [],
    params,
    body,
  };
}

/**
 * `POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration`
 *
 * An API to check validity of the endpoint and and authentication configuration for a customAuthenticationExtension object, which can represent one of the following derived types:
 */
export function create(
  body: IEndpoints['POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration']['body'],
  params?: IEndpoints['POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration']['response']
> {
  return {
    method: 'post',
    path: '/identity/customAuthenticationExtensions/{customAuthenticationExtension-id}/validateAuthenticationConfiguration',
    paramDefs: [{ name: 'customAuthenticationExtension-id', in: 'path' }],
    params,
    body,
  };
}
