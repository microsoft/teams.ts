import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause`
 *
 * Temporarily stop a running synchronization job. All the progress, including job state, is persisted, and the job continues from where it left off when a start call is made.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/pause',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
