import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'get'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    'post'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
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
 * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members`
 *
 * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or an externalGroup as members.
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
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
 * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or an externalGroup as members.
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    method: 'get',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
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
 * `PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members/{identity-id}',
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
 * `POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['parameters']
): EndpointRequest<
  IEndpoints['POST /connections/{externalConnection-id}/groups/{externalGroup-id}/members']['response']
> {
  return {
    method: 'post',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}/members',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}
