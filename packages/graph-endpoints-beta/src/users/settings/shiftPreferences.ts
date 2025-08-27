import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'delete'
  >;
  'GET /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'get'
  >;
  'PATCH /users/{user-id}/settings/shiftPreferences': Operation<
    '/users/{user-id}/settings/shiftPreferences',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/shiftPreferences`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/shiftPreferences']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/shiftPreferences',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/shiftPreferences`
 *
 * Retrieve the properties and relationships of a shiftPreferences object by ID.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/shiftPreferences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/shiftPreferences',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/shiftPreferences`
 *
 * Update the properties and relationships of a shiftPreferences object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/shiftPreferences']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/shiftPreferences',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
