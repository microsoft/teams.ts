export * as defaultUserRoleOverrides from './defaultUserRoleOverrides';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'delete'
  >;
  'GET /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'get'>;
  'GET /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'get'
  >;
  'PATCH /policies/authorizationPolicy/{authorizationPolicy-id}': Operation<
    '/policies/authorizationPolicy/{authorizationPolicy-id}',
    'patch'
  >;
  'POST /policies/authorizationPolicy': Operation<'/policies/authorizationPolicy', 'post'>;
}

/**
 * `DELETE /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authorizationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authorizationPolicy`
 *
 * Retrieve the properties of an authorizationPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authorizationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy',
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
 * `GET /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 * The policy that controls Microsoft Entra authorization settings.
 */
export function get$1(
  params?: IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authorizationPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authorizationPolicy/{authorizationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authorizationPolicy/{authorizationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/authorizationPolicy/{authorizationPolicy-id}',
    paramDefs: [{ name: 'authorizationPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/authorizationPolicy`
 *
 */
export function create(
  body: IEndpoints['POST /policies/authorizationPolicy']['body'],
  params?: IEndpoints['POST /policies/authorizationPolicy']['parameters']
): EndpointRequest<IEndpoints['POST /policies/authorizationPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/authorizationPolicy',
    paramDefs: [],
    params,
    body,
  };
}
