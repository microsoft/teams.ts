export * as assign from './assign';
export * as assignments from './assignments';
export * as setPriority from './setPriority';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations',
    'get'
  >;
  'GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceEnrollmentConfigurations': Operation<
    '/deviceManagement/deviceEnrollmentConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Deletes a deviceEnrollmentWindowsHelloForBusinessConfiguration.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceEnrollmentConfigurations`
 *
 * List properties and relationships of the deviceEnrollmentWindowsHelloForBusinessConfiguration objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Read properties and relationships of the deviceEnrollmentLimitConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Update the properties of a deviceEnrollmentLimitConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceEnrollmentConfigurations`
 *
 * Create a new deviceEnrollmentWindowsHelloForBusinessConfiguration object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
