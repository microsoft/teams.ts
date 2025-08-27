import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/sendActivityNotification': Operation<
    '/groups/{group-id}/team/sendActivityNotification',
    'post'
  >;
}

/**
  * `POST /groups/{group-id}/team/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/sendActivityNotification']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/sendActivityNotification',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
