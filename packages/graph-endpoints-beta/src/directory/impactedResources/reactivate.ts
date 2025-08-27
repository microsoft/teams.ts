import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/impactedResources/{impactedResource-id}/reactivate': Operation<
    '/directory/impactedResources/{impactedResource-id}/reactivate',
    'post'
  >;
}

/**
 * `POST /directory/impactedResources/{impactedResource-id}/reactivate`
 *
 * Reactivate an accidentally dismissed, completed, or postponed impactedResource object. This action updates the status of the resource to active. This method is relevant only if the status of the impactedResource object is dismissed, postponed, or completedByUser.
 */
export function create(
  body: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/reactivate']['body'],
  params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/reactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/impactedResources/{impactedResource-id}/reactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/impactedResources/{impactedResource-id}/reactivate',
    paramDefs: [{ name: 'impactedResource-id', in: 'path' }],
    params,
    body,
  };
}
