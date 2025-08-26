import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/sendActivityNotificationToRecipients': Operation<
    '/teamwork/sendActivityNotificationToRecipients',
    'post'
  >;
}

/**
 * `POST /teamwork/sendActivityNotificationToRecipients`
 *
 * Send activity feed notifications to multiple users, in bulk.  For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /teamwork/sendActivityNotificationToRecipients']['body'],
  params?: IEndpoints['POST /teamwork/sendActivityNotificationToRecipients']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/sendActivityNotificationToRecipients']['response']> {
  return {
    method: 'post',
    path: '/teamwork/sendActivityNotificationToRecipients',
    paramDefs: [],
    params,
    body,
  };
}
