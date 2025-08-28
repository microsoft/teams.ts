import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/operations': Operation<'/app/calls/{call-id}/operations', 'get'>;
  'GET /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/app/calls/{call-id}/operations/{commsOperation-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/operations': Operation<'/app/calls/{call-id}/operations', 'post'>;
}

/**
 * `DELETE /app/calls/{call-id}/operations/{commsOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/operations/{commsOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'commsOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/operations`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/operations/{commsOperation-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/operations/{commsOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
      { name: 'commsOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/calls/{call-id}/operations/{commsOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/operations/{commsOperation-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'commsOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/operations']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/operations',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
