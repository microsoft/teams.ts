export * as allMembers from './allMembers';
export * as archive from './archive';
export * as completeMigration from './completeMigration';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as planner from './planner';
export * as provisionEmail from './provisionEmail';
export * as removeEmail from './removeEmail';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'delete'>;
  'GET /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'get'>;
  'PATCH /teams/{team-id}/primaryChannel': Operation<'/teams/{team-id}/primaryChannel', 'patch'>;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel`
 *
 * Get the default channel, General, of a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/primaryChannel']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
