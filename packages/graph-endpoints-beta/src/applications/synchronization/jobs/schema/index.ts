export * as directories from './directories';
export * as parseExpression from './parseExpression';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
    'patch'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema`
 *
 * The synchronization schema configured for the job.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
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
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/schema',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
