import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/operations': Operation<
    '/communications/calls/{call-id}/operations',
    'get'
  >;
  'GET /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/operations/{commsOperation-id}': Operation<
    '/communications/calls/{call-id}/operations/{commsOperation-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/operations': Operation<
    '/communications/calls/{call-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/operations/{commsOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'commsOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/operations`
 *
 * Get the status of an operation that adds the large gallery view to a call.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /communications/calls/{call-id}/operations']['response']> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/operations',
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
 * `GET /communications/calls/{call-id}/operations/{commsOperation-id}`
 *
 * Get the status of an operation that adds the large gallery view to a call.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
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
 * `PATCH /communications/calls/{call-id}/operations/{commsOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/operations/{commsOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/calls/{call-id}/operations/{commsOperation-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'commsOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/operations']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/operations']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/operations',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
