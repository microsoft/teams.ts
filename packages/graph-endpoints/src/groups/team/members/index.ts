export * as add from './add';
export * as remove from './remove';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/members': Operation<'/groups/{group-id}/team/members', 'get'>;
  'GET /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/members/{conversationMember-id}': Operation<
    '/groups/{group-id}/team/members/{conversationMember-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/members': Operation<'/groups/{group-id}/team/members', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/team/members/{conversationMember-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/members`
 *
 * Members and owners of the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/members']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/members']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/members',
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
 * `GET /groups/{group-id}/team/members/{conversationMember-id}`
 *
 * Members and owners of the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
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
 * `PATCH /groups/{group-id}/team/members/{conversationMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/members/{conversationMember-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/members/{conversationMember-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'conversationMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/members`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/members']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/members']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/members']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/members',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
