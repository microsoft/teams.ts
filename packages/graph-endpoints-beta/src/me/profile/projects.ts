import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'delete'
  >;
  'GET /me/profile/projects': Operation<'/me/profile/projects', 'get'>;
  'GET /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'get'
  >;
  'PATCH /me/profile/projects/{projectParticipation-id}': Operation<
    '/me/profile/projects/{projectParticipation-id}',
    'patch'
  >;
  'POST /me/profile/projects': Operation<'/me/profile/projects', 'post'>;
}

/**
 * `DELETE /me/profile/projects/{projectParticipation-id}`
 *
 * Delete a projectParticipation object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/profile/projects/{projectParticipation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/projects/{projectParticipation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'projectParticipation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/projects`
 *
 * Retrieve a list of projectParticipation objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/projects']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/projects']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/projects',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/projects/{projectParticipation-id}`
 *
 * Retrieve the properties and relationships of a projectParticipation object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/projects/{projectParticipation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/projects/{projectParticipation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'projectParticipation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/projects/{projectParticipation-id}`
 *
 * Update the properties of a projectParticipation object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/projects/{projectParticipation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/projects/{projectParticipation-id}',
    paramDefs: [{ name: 'projectParticipation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/projects`
 *
 * Use this API to create a new projectParticipation object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/projects']['body'],
  params?: IEndpoints['POST /me/profile/projects']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/projects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/projects',
    paramDefs: [],
    params,
    body,
  };
}
