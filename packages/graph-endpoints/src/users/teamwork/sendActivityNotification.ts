import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/teamwork/sendActivityNotification': Operation<
    '/users/{user-id}/teamwork/sendActivityNotification',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/teamwork/sendActivityNotification`
 *
 * Send an activity feed notification to a user. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['body'],
  params?: IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/teamwork/sendActivityNotification']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/teamwork/sendActivityNotification',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
