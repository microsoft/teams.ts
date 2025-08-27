import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 * The list of group assignments for the device configuration profile
 */
export function list(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 * The list of group assignments for the device configuration profile
 */
export function get(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
