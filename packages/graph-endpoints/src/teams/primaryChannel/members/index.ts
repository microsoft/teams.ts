export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/members': Operation<
    '/teams/{team-id}/primaryChannel/members',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/members': Operation<
    '/teams/{team-id}/primaryChannel/members',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/members`
 *
 * A collection of membership records associated with the channel.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/members']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/members',
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
 * `GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
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
 * `PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/members/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/members`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/members']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/members',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
