import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'delete'
  >;
  'GET /external/connections/{externalConnection-id}/operations': Operation<
    '/external/connections/{externalConnection-id}/operations',
    'get'
  >;
  'GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}': Operation<
    '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    'patch'
  >;
  'POST /external/connections/{externalConnection-id}/operations': Operation<
    '/external/connections/{externalConnection-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections/{externalConnection-id}/operations`
 *
 */
export function list(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/operations',
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
 * `GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /external/connections/{externalConnection-id}/operations/{connectionOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/external/connections/{externalConnection-id}/operations/{connectionOperation-id}',
    paramDefs: [
      { name: 'externalConnection-id', in: 'path' },
      { name: 'connectionOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /external/connections/{externalConnection-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /external/connections/{externalConnection-id}/operations']['body'],
  params?: IEndpoints['POST /external/connections/{externalConnection-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /external/connections/{externalConnection-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/external/connections/{externalConnection-id}/operations',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}
