export * as bulkUpload from './bulkUpload';
export * as pause from './pause';
export * as provisionOnDemand from './provisionOnDemand';
export * as restart from './restart';
export * as schema from './schema';
export * as start from './start';
export * as validateCredentials from './validateCredentials';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs': Operation<
    '/applications/{application-id}/synchronization/jobs',
    'get'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/jobs': Operation<
    '/applications/{application-id}/synchronization/jobs',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs`
 *
 * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs',
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
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/jobs`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
