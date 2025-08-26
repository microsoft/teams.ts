import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/unarchive': Operation<'/teams/{team-id}/unarchive', 'post'>;
}

/**
 * `POST /teams/{team-id}/unarchive`
 *
 * Restore an archived team and restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. Teams are archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/unarchive']['body'],
  params?: IEndpoints['POST /teams/{team-id}/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/unarchive',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
