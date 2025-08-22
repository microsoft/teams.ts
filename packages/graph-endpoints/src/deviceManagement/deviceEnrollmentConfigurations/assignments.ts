import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 * Deletes a enrollmentConfigurationAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 * List properties and relationships of the enrollmentConfigurationAssignment objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
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
 * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 * Read properties and relationships of the enrollmentConfigurationAssignment object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
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
 * `PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}`
 *
 * Update the properties of a enrollmentConfigurationAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments/{enrollmentConfigurationAssignment-id}',
    paramDefs: [
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
      { name: 'enrollmentConfigurationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments`
 *
 * Create a new enrollmentConfigurationAssignment object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}/assignments',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
