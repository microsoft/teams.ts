import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /users/{user-id}/scopedRoleMemberOf': Operation<
    '/users/{user-id}/scopedRoleMemberOf',
    'get'
  >;
  'GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'patch'
  >;
  'POST /users/{user-id}/scopedRoleMemberOf': Operation<
    '/users/{user-id}/scopedRoleMemberOf',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/scopedRoleMemberOf`
 *
 * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/scopedRoleMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/scopedRoleMemberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/scopedRoleMemberOf',
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
 * `GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/scopedRoleMemberOf`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['body'],
  params?: IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/scopedRoleMemberOf']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/scopedRoleMemberOf',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
