export * as assign from './assign';
export * as assignments from './assignments';
export * as createEnrollmentNotificationConfiguration from './createEnrollmentNotificationConfiguration';
export * as hasPayloadLinks from './hasPayloadLinks';
export * as setPriority from './setPriority';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /me/deviceEnrollmentConfigurations': Operation<'/me/deviceEnrollmentConfigurations', 'get'>;
  'GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /me/deviceEnrollmentConfigurations': Operation<
    '/me/deviceEnrollmentConfigurations',
    'post'
  >;
}

/**
 * `DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/deviceEnrollmentConfigurations`
 *
 * Get enrollment configurations targeted to the user
 */
export function list(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /me/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations',
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
 * `GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Get enrollment configurations targeted to the user
 */
export function get(
  params?: IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [{ name: 'deviceEnrollmentConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/deviceEnrollmentConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /me/deviceEnrollmentConfigurations']['body'],
  params?: IEndpoints['POST /me/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /me/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/deviceEnrollmentConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
