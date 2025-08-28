export * as allChannels from './allChannels';
export * as archive from './archive';
export * as channels from './channels';
export * as clone from './clone';
export * as completeMigration from './completeMigration';
export * as group from './group';
export * as incomingChannels from './incomingChannels';
export * as installedApps from './installedApps';
export * as members from './members';
export * as operations from './operations';
export * as owners from './owners';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as sendActivityNotification from './sendActivityNotification';
export * as tags from './tags';
export * as template from './template';
export * as templateDefinition from './templateDefinition';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'delete'>;
  'GET /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'get'>;
  'PUT /groups/{group-id}/team': Operation<'/groups/{group-id}/team', 'put'>;
}

/**
 * `DELETE /groups/{group-id}/team`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team`
 *
 * The team associated with this group.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/team`
 *
 * Create a new team from a group. In order to create a team, the group must have at least one owner. If the group was created less than 15 minutes ago, calls to create a team might fail with a 404 Not Found error because the group information didn&#x27;t fully replicate.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/team']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/team']['parameters']
): EndpointRequest<IEndpoints['PUT /groups/{group-id}/team']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/team',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
