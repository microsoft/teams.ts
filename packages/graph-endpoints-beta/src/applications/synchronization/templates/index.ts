export * as schema from './schema';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/templates': Operation<
    '/applications/{application-id}/synchronization/templates',
    'get'
  >;
  'GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/templates': Operation<
    '/applications/{application-id}/synchronization/templates',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['application-id', 'synchronizationTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/templates`
 *
 * Pre-configured synchronization settings for a particular application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/templates']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/templates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/templates',
    paramDefs: {
      path: ['application-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 * Pre-configured synchronization settings for a particular application.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 * Update (override) the synchronization template associated with a given application.
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: {
      path: ['application-id', 'synchronizationTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/templates`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/templates']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/templates']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/templates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/synchronization/templates',
    paramDefs: {
      path: ['application-id'],
    },
    params,
    body,
  };
}
