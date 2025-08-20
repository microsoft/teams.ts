import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'post'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 * Delete an externalGroupMember object.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
      { name: 'identity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members`
 *
 * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
      { name: 'identity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
      { name: 'identity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members`
 *
 * Create a new externalGroupMember object.
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
