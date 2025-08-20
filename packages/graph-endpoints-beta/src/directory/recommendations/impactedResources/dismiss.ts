import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss`
 *
 * Dismiss an impactedResources object and update its status to dismissed.
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss',
    paramDefs: [
      { name: 'recommendation-id', in: 'path' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
