import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'delete'
  >;
  'GET /admin/windows/updates/resourceConnections': Operation<
    '/admin/windows/updates/resourceConnections',
    'get'
  >;
  'GET /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}': Operation<
    '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    'patch'
  >;
  'POST /admin/windows/updates/resourceConnections': Operation<
    '/admin/windows/updates/resourceConnections',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}`
 *
 * Delete a resourceConnection object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'resourceConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/resourceConnections`
 *
 * Get a list of the resourceConnection objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/resourceConnections']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/resourceConnections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/resourceConnections',
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
 * `GET /admin/windows/updates/resourceConnections/{resourceConnection-id}`
 *
 * Read the properties and relationships of an operationalInsightsConnection object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'resourceConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/resourceConnections/{resourceConnection-id}',
    paramDefs: [{ name: 'resourceConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/resourceConnections`
 *
 * Create a new operationalInsightsConnection object.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/resourceConnections']['body'],
  params?: IEndpoints['POST /admin/windows/updates/resourceConnections']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/resourceConnections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/resourceConnections',
    paramDefs: [],
    params,
    body,
  };
}
