export * as members from './members';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'delete'
  >;
  'GET /connections/{externalConnection-id}/groups': Operation<
    '/connections/{externalConnection-id}/groups',
    'get'
  >;
  'GET /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'get'
  >;
  'PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}': Operation<
    '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    'patch'
  >;
  'POST /connections/{externalConnection-id}/groups': Operation<
    '/connections/{externalConnection-id}/groups',
    'post'
  >;
}

/**
 * `DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /connections/{externalConnection-id}/groups`
 *
 */
export function list(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<IEndpoints['GET /connections/{externalConnection-id}/groups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections/{externalConnection-id}/groups',
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
 * `GET /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
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
 * `PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['body'],
  params?: IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /connections/{externalConnection-id}/groups/{externalGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/connections/{externalConnection-id}/groups/{externalGroup-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'externalGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /connections/{externalConnection-id}/groups`
 *
 */
export function create(
  body: IEndpoints['POST /connections/{externalConnection-id}/groups']['body'],
  params?: IEndpoints['POST /connections/{externalConnection-id}/groups']['parameters']
): EndpointRequest<IEndpoints['POST /connections/{externalConnection-id}/groups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/connections/{externalConnection-id}/groups',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
