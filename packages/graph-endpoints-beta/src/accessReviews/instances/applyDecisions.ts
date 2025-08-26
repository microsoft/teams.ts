import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions',
    'post'
  >;
}

/**
 * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions`
 *
 * In the Microsoft Entra access reviews feature, apply the decisions of a completed accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.   After an access review is finished, either because it reached the end date or an administrator stopped it manually, and auto-apply wasn&#x27;t configured for the review, you can call Apply to apply the changes. Until apply occurs, the decisions to remove access rights do not appear on the source resource, the users for instance retain their group memberships. By calling apply, the outcome of the review is implemented by updating the group or application. If a user&#x27;s access was denied in the review, when an administrator calls this API, Microsoft Entra ID removes their membership or application assignment.  After an access review is finished, and auto-apply was configured, then the status of the review will change from Completed through intermediate states and finally will change to state Applied. You should expect to see denied users, if any, being removed from the resource group membership or app assignment in a few minutes. A configured auto applying review, or selecting Apply doesn&#x27;t have an effect on a group that originates in an on-premises directory or a dynamic group. If you want to change a group that originates on-premises, download the results and apply those changes to the representation of the group in that directory.
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions',
    paramDefs: [
      { name: 'accessReview-id', in: 'path' },
      { name: 'accessReview-id1', in: 'path' },
    ],
    params,
    body,
  };
}
