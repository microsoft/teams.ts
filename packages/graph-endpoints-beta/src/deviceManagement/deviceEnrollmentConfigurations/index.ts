export * as assign from './assign';
export * as assignments from './assignments';
export * as createEnrollmentNotificationConfiguration from './createEnrollmentNotificationConfiguration';
export * as hasPayloadLinks from './hasPayloadLinks';
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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The list of device enrollment configurations
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
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
 * The list of device enrollment configurations
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceEnrollmentConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceEnrollmentConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
