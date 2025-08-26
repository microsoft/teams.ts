import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/complete': Operation<
    '/directory/recommendations/{recommendation-id}/complete',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/complete`
 *
 * Complete a recommendation object and update its status to completedByUser.
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/complete']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/complete']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/complete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/complete',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}
