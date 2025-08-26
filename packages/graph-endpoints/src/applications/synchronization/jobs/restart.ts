import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart`
 *
 * Restart a stopped synchronization job, forcing it to reprocess all the objects in the directory. Optionally clears existing the synchronization state and previous errors.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/restart',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
