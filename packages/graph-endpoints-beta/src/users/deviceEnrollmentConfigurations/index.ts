export * as assign from './assign';
export * as assignments from './assignments';
export * as createEnrollmentNotificationConfiguration from './createEnrollmentNotificationConfiguration';
export * as hasPayloadLinks from './hasPayloadLinks';
export * as setPriority from './setPriority';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'delete'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations',
    'get'
  >;
  'GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'get'
  >;
  'PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    'patch'
  >;
  'POST /users/{user-id}/deviceEnrollmentConfigurations': Operation<
    '/users/{user-id}/deviceEnrollmentConfigurations',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations`
 *
 * Get enrollment configurations targeted to the user
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 * Get enrollment configurations targeted to the user
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'deviceEnrollmentConfiguration-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/deviceEnrollmentConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['body'],
  params?: IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/deviceEnrollmentConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/deviceEnrollmentConfigurations',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
