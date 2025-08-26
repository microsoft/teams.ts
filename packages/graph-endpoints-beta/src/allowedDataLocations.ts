import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'delete'
  >;
  'GET /allowedDataLocations': Operation<'/allowedDataLocations', 'get'>;
  'GET /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'get'
  >;
  'PATCH /allowedDataLocations/{allowedDataLocation-id}': Operation<
    '/allowedDataLocations/{allowedDataLocation-id}',
    'patch'
  >;
  'POST /allowedDataLocations': Operation<'/allowedDataLocations', 'post'>;
}

/**
 * `DELETE /allowedDataLocations/{allowedDataLocation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /allowedDataLocations/{allowedDataLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /allowedDataLocations/{allowedDataLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/allowedDataLocations/{allowedDataLocation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'allowedDataLocation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /allowedDataLocations`
 *
 */
export function list(
  params?: IEndpoints['GET /allowedDataLocations']['parameters']
): EndpointRequest<IEndpoints['GET /allowedDataLocations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/allowedDataLocations',
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
 * `GET /allowedDataLocations/{allowedDataLocation-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /allowedDataLocations/{allowedDataLocation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /allowedDataLocations/{allowedDataLocation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/allowedDataLocations/{allowedDataLocation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'allowedDataLocation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /allowedDataLocations/{allowedDataLocation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['body'],
  params?: IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /allowedDataLocations/{allowedDataLocation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/allowedDataLocations/{allowedDataLocation-id}',
    paramDefs: [{ name: 'allowedDataLocation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /allowedDataLocations`
 *
 */
export function create(
  body: IEndpoints['POST /allowedDataLocations']['body'],
  params?: IEndpoints['POST /allowedDataLocations']['parameters']
): EndpointRequest<IEndpoints['POST /allowedDataLocations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/allowedDataLocations',
    paramDefs: [],
    params,
    body,
  };
}
