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
  'DELETE /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels': Operation<'/groups/{group-id}/team/channels', 'get'>;
  'GET /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}': Operation<
    '/groups/{group-id}/team/channels/{channel-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/channels': Operation<'/groups/{group-id}/team/channels', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels`
 *
 * The collection of channels and messages associated with the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/channels']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/channels']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}`
 *
 * The collection of channels and messages associated with the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/channels`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/channels']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/channels',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
