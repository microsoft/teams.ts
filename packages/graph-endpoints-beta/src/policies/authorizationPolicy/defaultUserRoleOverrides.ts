import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'delete'
  >;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    'get'
  >;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'get'
  >;
  'PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    'patch'
  >;
  'POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    'post'
  >;
}

/**
 * `DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authorizationPolicy-id', in: 'path' },
      { name: 'defaultUserRoleOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides`
 *
 */
export function list(
  params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorizationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorizationPolicy-id', in: 'path' },
      { name: 'defaultUserRoleOverride-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['body'],
  params?: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}',
    paramDefs: [
      { name: 'authorizationPolicy-id', in: 'path' },
      { name: 'defaultUserRoleOverride-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides`
 *
 */
export function create(
  body: IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['body'],
  params?: IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides',
    paramDefs: [{ name: 'authorizationPolicy-id', in: 'path' }],
    params,
    body,
  };
}
