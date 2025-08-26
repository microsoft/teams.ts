import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/sendActivityNotification': Operation<
    '/teams/{team-id}/sendActivityNotification',
    'post'
  >;
}

/**
  * `POST /teams/{team-id}/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
export function create(
  body: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/sendActivityNotification']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/sendActivityNotification',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
