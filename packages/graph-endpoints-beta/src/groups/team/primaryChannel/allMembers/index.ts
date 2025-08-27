export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/allMembers': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/allMembers': Operation<
    '/groups/{group-id}/team/primaryChannel/allMembers',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/allMembers`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/allMembers',
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
 * `GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 * A collection of membership records associated with the channel. It includes both direct and indirect members of shared channels.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/allMembers/{conversationMember-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/allMembers`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/allMembers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/allMembers',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
