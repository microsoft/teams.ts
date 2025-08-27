import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/endpoints/{endpoint-id}': Operation<
    '/groups/{group-id}/endpoints/{endpoint-id}',
    'delete'
  >;
  'GET /groups/{group-id}/endpoints': Operation<'/groups/{group-id}/endpoints', 'get'>;
  'GET /groups/{group-id}/endpoints/{endpoint-id}': Operation<
    '/groups/{group-id}/endpoints/{endpoint-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/endpoints/{endpoint-id}': Operation<
    '/groups/{group-id}/endpoints/{endpoint-id}',
    'patch'
  >;
  'POST /groups/{group-id}/endpoints': Operation<'/groups/{group-id}/endpoints', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/endpoints/{endpoint-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/endpoints/{endpoint-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/endpoints`
 *
 * Retrieve a list of endpoint objects.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/endpoints']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/endpoints']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/endpoints',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/endpoints/{endpoint-id}`
 *
 * Retrieve the properties and relationships of a specific endpoint object.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/endpoints/{endpoint-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/endpoints/{endpoint-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/endpoints/{endpoint-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/endpoints/{endpoint-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/endpoints/{endpoint-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/endpoints/{endpoint-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'endpoint-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/endpoints`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/endpoints']['body'],
  params?: IEndpoints['POST /groups/{group-id}/endpoints']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/endpoints']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/endpoints',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
