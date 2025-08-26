export * as members from './members';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/groups': Operation<
    '/external/connections/{externalConnection-id}/groups',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/groups': Operation<
    '/external/connections/{externalConnection-id}/groups',
    'post'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 * Delete an externalGroup object.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups`
 *
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups',
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
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/groups`
 *
 * Create a new externalGroup object.
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/groups']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/groups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/groups',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
