import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'delete'
  >;
  'GET /me/scopedRoleMemberOf': Operation<'/me/scopedRoleMemberOf', 'get'>;
  'GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'get'
  >;
  'PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}': Operation<
    '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    'patch'
  >;
  'POST /me/scopedRoleMemberOf': Operation<'/me/scopedRoleMemberOf', 'post'>;
}

/**
 * `DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/scopedRoleMemberOf`
 *
 * Retrieve a list of scopedRoleMembership for the user.
 */
export function get(
  params?: IEndpoints['GET /me/scopedRoleMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /me/scopedRoleMemberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/scopedRoleMemberOf',
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
 * `GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 * The scoped-role administrative unit memberships for this user. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'scopedRoleMembership-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['body'],
  params?: IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/scopedRoleMemberOf/{scopedRoleMembership-id}',
    paramDefs: [{ name: 'scopedRoleMembership-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/scopedRoleMemberOf`
 *
 */
export function create(
  body: IEndpoints['POST /me/scopedRoleMemberOf']['body'],
  params?: IEndpoints['POST /me/scopedRoleMemberOf']['parameters']
): EndpointRequest<IEndpoints['POST /me/scopedRoleMemberOf']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/scopedRoleMemberOf',
    paramDefs: [],
    params,
    body,
  };
}
