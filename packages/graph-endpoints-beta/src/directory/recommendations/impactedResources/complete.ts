import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete`
 *
 * Complete an impactedResource object and update its status to completedByUser.
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete',
    paramDefs: [
      { name: 'recommendation-id', in: 'path' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}
