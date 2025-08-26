import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
    'post'
  >;
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop`
 *
 * Stop a currently active accessReviewInstance. After the access review instance stops, the instance status will be Completed, the reviewers can no longer give input, and the access review decisions can be applied. Stopping an instance will not effect future instances. To prevent a recurring access review from starting future instances, update the schedule definition to change its scheduled end date.
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
    paramDefs: [{ name: 'accessReviewInstance-id', in: 'path' }],
    params,
    body,
  };
}
