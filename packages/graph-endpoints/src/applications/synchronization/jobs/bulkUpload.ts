import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'delete'
  >;
  'GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'get'
  >;
  'PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    'patch'
  >;
}

/**
 * `DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
 *
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
> {
  return {
    method: 'delete',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
 *
 * The bulk upload operation for the job.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
): EndpointRequest<
  IEndpoints['GET /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
> {
  return {
    method: 'get',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
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
 * `PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload`
 *
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload']['response']
> {
  return {
    method: 'patch',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/bulkUpload',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
