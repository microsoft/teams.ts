import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 * The list of group assignments for the device configuration profile
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 * The list of group assignments for the device configuration profile
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}
