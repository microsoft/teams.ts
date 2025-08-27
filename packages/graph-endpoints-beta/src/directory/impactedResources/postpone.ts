import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/impactedResources/{impactedResource-id}/postpone': Operation<
    '/directory/impactedResources/{impactedResource-id}/postpone',
    'post'
  >;
}

/**
 * `POST /directory/impactedResources/{impactedResource-id}/postpone`
 *
 * Postpone action on an impactedResource object to a specified future date and time by marking its status as postponed. On the specified date and time, Microsoft Entra ID will automatically mark the status of the impactedResource object to active.
 */
export function create(
  body: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['body'],
  params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/impactedResources/{impactedResource-id}/postpone',
    paramDefs: [{ name: 'impactedResource-id', in: 'path' }],
    params,
    body,
  };
}
