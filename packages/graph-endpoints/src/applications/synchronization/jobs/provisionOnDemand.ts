import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand': Operation<
    '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    'post'
  >;
}

/**
 * `POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand`
 *
 * Select a user and provision the account on-demand. The rate limit for this API is 5 requests per 10 seconds.
 */
export function create(
  body: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['body'],
  params?: IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['parameters']
): EndpointRequest<
  IEndpoints['POST /applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand']['response']
> {
  return {
    method: 'post',
    path: '/applications/{application-id}/synchronization/jobs/{synchronizationJob-id}/provisionOnDemand',
    paramDefs: [
      { name: 'application-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
