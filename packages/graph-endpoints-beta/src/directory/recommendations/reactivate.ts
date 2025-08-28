import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/reactivate': Operation<
    '/directory/recommendations/{recommendation-id}/reactivate',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/reactivate`
 *
 * Reactivate a completed, dismissed, or postponed recommendation object. This action updates the status of the recommendation to active. This method only works when the status of the recommendation is completedByUser, dismissed, or postponed.
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/reactivate']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/reactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/reactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/reactivate',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}
