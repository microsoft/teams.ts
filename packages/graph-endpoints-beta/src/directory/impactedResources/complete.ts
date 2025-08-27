import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/impactedResources/{impactedResource-id}/complete': Operation<
    '/directory/impactedResources/{impactedResource-id}/complete',
    'post'
  >;
}

/**
 * `POST /directory/impactedResources/{impactedResource-id}/complete`
 *
 * Complete an impactedResource object and update its status to completedByUser.
 */
export function create(
  body: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/complete']['body'],
  params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/complete']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/impactedResources/{impactedResource-id}/complete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/impactedResources/{impactedResource-id}/complete',
    paramDefs: [{ name: 'impactedResource-id', in: 'path' }],
    params,
    body,
  };
}
