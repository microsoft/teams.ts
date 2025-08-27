export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/allMembers': Operation<
    '/teams/{team-id}/primaryChannel/allMembers',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/allMembers': Operation<
    '/teams/{team-id}/primaryChannel/allMembers',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/allMembers',
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
 * `GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
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
 * `PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/allMembers',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
