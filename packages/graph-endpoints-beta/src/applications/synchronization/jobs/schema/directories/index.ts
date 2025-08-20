export * as discover from './discover';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'get'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    'patch'
  >;
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    'post'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
      { name: 'directoryDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 * Contains the collection of directories and all of their objects.
 */
export function list(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
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
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 * Contains the collection of directories and all of their objects.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
      { name: 'directoryDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories/{directoryDefinition-id}',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
      { name: 'directoryDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories`
 *
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema/directories',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
