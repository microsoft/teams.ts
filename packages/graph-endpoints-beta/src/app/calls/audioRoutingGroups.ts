import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'delete'
  >;
  'GET /app/calls/{call-id}/audioRoutingGroups': Operation<
    '/app/calls/{call-id}/audioRoutingGroups',
    'get'
  >;
  'GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'get'
  >;
  'PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'patch'
  >;
  'POST /app/calls/{call-id}/audioRoutingGroups': Operation<
    '/app/calls/{call-id}/audioRoutingGroups',
    'post'
  >;
}

/**
 * `DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'audioRoutingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/calls/{call-id}/audioRoutingGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups']['parameters']
): EndpointRequest<IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/audioRoutingGroups',
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
 * `GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'call-id', in: 'path' },
      { name: 'audioRoutingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['body'],
  params?: IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'audioRoutingGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /app/calls/{call-id}/audioRoutingGroups`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/audioRoutingGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/audioRoutingGroups',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
