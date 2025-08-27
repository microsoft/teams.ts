import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
    'post'
  >;
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}
