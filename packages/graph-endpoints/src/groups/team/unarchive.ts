import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/unarchive': Operation<'/groups/{group-id}/team/unarchive', 'post'>;
}

/**
 * `POST /groups/{group-id}/team/unarchive`
 *
 * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/unarchive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/unarchive']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/unarchive',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
