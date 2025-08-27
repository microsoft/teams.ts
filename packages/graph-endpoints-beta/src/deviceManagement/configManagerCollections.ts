import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'delete'
  >;
  'GET /deviceManagement/configManagerCollections': Operation<
    '/deviceManagement/configManagerCollections',
    'get'
  >;
  'GET /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'get'
  >;
  'PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}': Operation<
    '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    'patch'
  >;
  'POST /deviceManagement/configManagerCollections': Operation<
    '/deviceManagement/configManagerCollections',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'configManagerCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configManagerCollections`
 *
 * A list of ConfigManagerCollection
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configManagerCollections']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configManagerCollections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configManagerCollections',
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
 * `GET /deviceManagement/configManagerCollections/{configManagerCollection-id}`
 *
 * A list of ConfigManagerCollection
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'configManagerCollection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configManagerCollections/{configManagerCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configManagerCollections/{configManagerCollection-id}',
    paramDefs: [{ name: 'configManagerCollection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configManagerCollections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configManagerCollections']['body'],
  params?: IEndpoints['POST /deviceManagement/configManagerCollections']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/configManagerCollections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configManagerCollections',
    paramDefs: [],
    params,
    body,
  };
}
