export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/members': Operation<'/teams/{team-id}/members', 'get'>;
  'GET /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/members': Operation<'/teams/{team-id}/members', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/members/{conversationMember-id}`
 *
 * Remove a conversationMember from a team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/members`
 *
 * Get the conversationMember collection of a team. The membership IDs returned by the server must be treated as opaque strings. The client shouldn&#x27;t try to parse or make assumptions about these resource IDs. In the future, membership results can include users from various tenants, as indicated in the response. Clients should avoid assuming that all members exclusively belong to the current tenant.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/members']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/members',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/members/{conversationMember-id}`
 *
 * Get a conversationMember from a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/members/{conversationMember-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/members/{conversationMember-id}`
 *
 * Update the role of a conversationMember in a team.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/members/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/members`
 *
 * Add a new conversationMember to a team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/members']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/members',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
