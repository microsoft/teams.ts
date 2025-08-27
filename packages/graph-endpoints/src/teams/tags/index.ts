export * as members from './members';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'delete'
  >;
  'GET /teams/{team-id}/tags': Operation<'/teams/{team-id}/tags', 'get'>;
  'GET /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/tags/{teamworkTag-id}': Operation<
    '/teams/{team-id}/tags/{teamworkTag-id}',
    'patch'
  >;
  'POST /teams/{team-id}/tags': Operation<'/teams/{team-id}/tags', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Delete a tag object permanently.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/tags`
 *
 * Get a list of the tag objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/tags',
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
 * `GET /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Read the properties and relationships of a tag object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/tags/{teamworkTag-id}`
 *
 * Update the properties of a tag object.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/tags/{teamworkTag-id}']['response']> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/tags/{teamworkTag-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamworkTag-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/tags`
 *
 * Create a standard tag for members in a team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/tags']['body'],
  params?: IEndpoints['POST /teams/{team-id}/tags']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/tags']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/tags',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
