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

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}': Operation<'/teams/{team-id}', 'delete'>;
  'GET /teams': Operation<'/teams', 'get'>;
  'GET /teams/{team-id}': Operation<'/teams/{team-id}', 'get'>;
  'PATCH /teams/{team-id}': Operation<'/teams/{team-id}', 'patch'>;
  'POST /teams': Operation<'/teams', 'post'>;
}

/**
 * `DELETE /teams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams`
 *
 * List all teams in an organization.
 */
export function list(
  params?: IEndpoints['GET /teams']['parameters']
): EndpointRequest<IEndpoints['GET /teams']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}`
 *
 * Retrieve the properties and relationships of the specified team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}`
 *
 * Update the properties of the specified team.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teams`
 *
 * Create a new team.
 */
export function create(
  body: IEndpoints['POST /teams']['body'],
  params?: IEndpoints['POST /teams']['parameters']
): EndpointRequest<IEndpoints['POST /teams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams',
    paramDefs: [],
    params,
    body,
  };
}
