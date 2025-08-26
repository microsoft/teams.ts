import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'delete'
  >;
  'GET /communications/calls/{call-id}/audioRoutingGroups': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups',
    'get'
  >;
  'GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'get'
  >;
  'PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    'patch'
  >;
  'POST /communications/calls/{call-id}/audioRoutingGroups': Operation<
    '/communications/calls/{call-id}/audioRoutingGroups',
    'post'
  >;
}

/**
 * `DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 * Delete the specified audioRoutingGroup.
 */
export function del(
  params?: IEndpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'call-id', in: 'path' },
      { name: 'audioRoutingGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/calls/{call-id}/audioRoutingGroups`
 *
 * Retrieve a list of audioRoutingGroup objects.
 */
export function list(
  params?: IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/calls/{call-id}/audioRoutingGroups',
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
 * `GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 * Retrieve the properties and relationships of an audioRoutingGroup object.
 */
export function get(
  params?: IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
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
 * `PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}`
 *
 * Modify sources and receivers of an audioRoutingGroup.
 */
export function update(
  body: IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['body'],
  params?: IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'audioRoutingGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/calls/{call-id}/audioRoutingGroups`
 *
 * Create a new audioRoutingGroup.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/audioRoutingGroups']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/audioRoutingGroups',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
