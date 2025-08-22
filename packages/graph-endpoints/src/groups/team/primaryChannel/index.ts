export * as allMembers from './allMembers';
export * as archive from './archive';
export * as completeMigration from './completeMigration';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as provisionEmail from './provisionEmail';
export * as removeEmail from './removeEmail';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel': Operation<
    '/groups/{group-id}/team/primaryChannel',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel': Operation<
    '/groups/{group-id}/team/primaryChannel',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel': Operation<
    '/groups/{group-id}/team/primaryChannel',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/primaryChannel']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel`
 *
 * The general channel for the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/primaryChannel']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/primaryChannel']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
