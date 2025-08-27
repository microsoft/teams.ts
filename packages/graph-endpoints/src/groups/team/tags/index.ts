export * as members from './members';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/tags': Operation<'/groups/{group-id}/team/tags', 'get'>;
  'GET /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/tags/{teamworkTag-id}': Operation<
    '/groups/{group-id}/team/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/tags': Operation<'/groups/{group-id}/team/tags', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/tags`
 *
 * The tags associated with the team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/tags']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/tags']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/tags',
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
 * `GET /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 * The tags associated with the team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/tags/{teamworkTag-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/team/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/tags`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/tags']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/tags']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/tags']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/tags',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
