import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /directory/recommendations/{recommendation-id}/dismiss': Operation<
    '/directory/recommendations/{recommendation-id}/dismiss',
    'post'
  >;
}

/**
 * `POST /directory/recommendations/{recommendation-id}/dismiss`
 *
 * Dismiss a recommendation object that you consider to be inapplicable to your tenant and update its status to dismissed .
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/dismiss',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}
