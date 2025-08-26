import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'delete'
  >;
  'GET /me/profile/skills': Operation<'/me/profile/skills', 'get'>;
  'GET /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'get'
  >;
  'PATCH /me/profile/skills/{skillProficiency-id}': Operation<
    '/me/profile/skills/{skillProficiency-id}',
    'patch'
  >;
  'POST /me/profile/skills': Operation<'/me/profile/skills', 'post'>;
}

/**
 * `DELETE /me/profile/skills/{skillProficiency-id}`
 *
 * Delete a skillProficiency object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/skills/{skillProficiency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/skills/{skillProficiency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'skillProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/skills`
 *
 * Retrieve a list of skillProficiency objects in a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/skills']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/skills']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/skills',
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
 * `GET /me/profile/skills/{skillProficiency-id}`
 *
 * Retrieve the properties and relationships of a skillproficiency object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/skills/{skillProficiency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/skills/{skillProficiency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'skillProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/skills/{skillProficiency-id}`
 *
 * Update the properties of a skillProficiency object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/skills/{skillProficiency-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/skills/{skillProficiency-id}',
    paramDefs: [{ name: 'skillProficiency-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/skills`
 *
 * Use this API to create a new skillProficiency object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/skills']['body'],
  params?: IEndpoints['POST /me/profile/skills']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/skills']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/skills',
    paramDefs: [],
    params,
    body,
  };
}
