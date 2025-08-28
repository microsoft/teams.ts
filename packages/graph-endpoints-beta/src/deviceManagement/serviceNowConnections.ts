import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'delete'
  >;
  'GET /deviceManagement/serviceNowConnections': Operation<
    '/deviceManagement/serviceNowConnections',
    'get'
  >;
  'GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'get'
  >;
  'PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}': Operation<
    '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    'patch'
  >;
  'POST /deviceManagement/serviceNowConnections': Operation<
    '/deviceManagement/serviceNowConnections',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceNowConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/serviceNowConnections`
 *
 * A list of ServiceNowConnections
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/serviceNowConnections']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/serviceNowConnections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/serviceNowConnections',
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
 * `GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
 *
 * A list of ServiceNowConnections
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceNowConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/serviceNowConnections/{serviceNowConnection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/serviceNowConnections/{serviceNowConnection-id}',
    paramDefs: [{ name: 'serviceNowConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/serviceNowConnections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/serviceNowConnections']['body'],
  params?: IEndpoints['POST /deviceManagement/serviceNowConnections']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/serviceNowConnections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/serviceNowConnections',
    paramDefs: [],
    params,
    body,
  };
}
