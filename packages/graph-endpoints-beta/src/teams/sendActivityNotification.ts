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
 * Send an activity feed notification in the scope of a team. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /teams/{team-id}/sendActivityNotification']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/sendActivityNotification']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/sendActivityNotification',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
