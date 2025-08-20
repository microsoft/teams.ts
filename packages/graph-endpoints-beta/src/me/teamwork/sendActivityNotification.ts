import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/teamwork/sendActivityNotification': Operation<
    '/me/teamwork/sendActivityNotification',
    'post'
  >;
}

/**
 * `POST /me/teamwork/sendActivityNotification`
 *
 * Send an activity feed notification to a user. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /me/teamwork/sendActivityNotification']['body'],
  params?: IEndpoints['POST /me/teamwork/sendActivityNotification']['parameters']
): EndpointRequest<IEndpoints['POST /me/teamwork/sendActivityNotification']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/teamwork/sendActivityNotification',
    paramDefs: [],
    params,
    body,
  };
}
