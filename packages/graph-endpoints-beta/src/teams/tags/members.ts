import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'delete'
  >;
  'GET /teams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members',
    'get'
  >;
  'GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    'patch'
  >;
  'POST /teams/{team-id}/tags/{teamworkTag-id}/members': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}/members',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 * Delete a member from a standard tag in a team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/tags/{teamworkTag-id}/members`
 *
 * Get a list of the members of a standard tag in a team and their properties.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/tags/{teamworkTag-id}/members',
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
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 * Get the properties and relationships of a member of a standard tag in a team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/tags/{teamworkTag-id}/members/{teamworkTagMember-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
      { name: 'teamworkTagMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/tags/{teamworkTag-id}/members`
 *
 * Create a new teamworkTagMember object in a team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['body'],
  params?: IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/tags/{teamworkTag-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/tags/{teamworkTag-id}/members',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
    body,
  };
}
