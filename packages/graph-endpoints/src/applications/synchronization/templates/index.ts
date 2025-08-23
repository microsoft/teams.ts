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
    method: 'delete',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/templates`
 *
 * Preconfigured synchronization settings for a particular application.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/templates']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/templates']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/templates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 * Preconfigured synchronization settings for a particular application.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
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
    method: 'post',
    path: '/applications/{application-id}/synchronization/templates',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
