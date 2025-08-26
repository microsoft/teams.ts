import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'delete'
  >;
  'GET /deviceManagement/resourceOperations': Operation<
    '/deviceManagement/resourceOperations',
    'get'
  >;
  'GET /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceOperations/{resourceOperation-id}': Operation<
    '/deviceManagement/resourceOperations/{resourceOperation-id}',
    'patch'
  >;
  'POST /deviceManagement/resourceOperations': Operation<
    '/deviceManagement/resourceOperations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/resourceOperations/{resourceOperation-id}`
 *
 * Deletes a resourceOperation.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'resourceOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/resourceOperations`
 *
 * List properties and relationships of the resourceOperation objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/resourceOperations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/resourceOperations']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/resourceOperations',
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
 * `GET /deviceManagement/resourceOperations/{resourceOperation-id}`
 *
 * Read properties and relationships of the resourceOperation object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'resourceOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/resourceOperations/{resourceOperation-id}`
 *
 * Update the properties of a resourceOperation object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/resourceOperations/{resourceOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/resourceOperations/{resourceOperation-id}',
    paramDefs: [{ name: 'resourceOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/resourceOperations`
 *
 * Create a new resourceOperation object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceOperations']['body'],
  params?: IEndpoints['POST /deviceManagement/resourceOperations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/resourceOperations']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/resourceOperations',
    paramDefs: [],
    params,
    body,
  };
}
