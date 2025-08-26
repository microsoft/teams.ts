import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'delete'
  >;
  'GET /users/{user-id}/profile/skills': Operation<'/users/{user-id}/profile/skills', 'get'>;
  'GET /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'get'
  >;
  'PATCH /users/{user-id}/profile/skills/{skillProficiency-id}': Operation<
    '/users/{user-id}/profile/skills/{skillProficiency-id}',
    'patch'
  >;
  'POST /users/{user-id}/profile/skills': Operation<'/users/{user-id}/profile/skills', 'post'>;
}

/**
 * `DELETE /users/{user-id}/profile/skills/{skillProficiency-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'skillProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/profile/skills`
 *
 * Represents detailed information about skills associated with a user in various services.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/profile/skills']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/profile/skills']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/skills',
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
 * `GET /users/{user-id}/profile/skills/{skillProficiency-id}`
 *
 * Represents detailed information about skills associated with a user in various services.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'skillProficiency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/profile/skills/{skillProficiency-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/profile/skills/{skillProficiency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/profile/skills/{skillProficiency-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'skillProficiency-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/profile/skills`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/profile/skills']['body'],
  params?: IEndpoints['POST /users/{user-id}/profile/skills']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/profile/skills']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/profile/skills',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
