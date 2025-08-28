import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/projects': Operation<'/users/{user-id}/profile/projects', 'get'>;
  'GET /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/projects/{projectParticipation-id}': Operation<
    '/users/{user-id}/profile/projects/{projectParticipation-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/projects': Operation<'/users/{user-id}/profile/projects', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/projects/{projectParticipation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'projectParticipation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/projects`
 *
 * Represents detailed information about projects associated with a user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/projects']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/projects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/projects',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/projects/{projectParticipation-id}`
 *
 * Represents detailed information about projects associated with a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'projectParticipation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/projects/{projectParticipation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/projects/{projectParticipation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/projects/{projectParticipation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'projectParticipation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/projects`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/projects']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/projects']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/projects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/projects',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
