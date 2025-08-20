import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/ndesConnectors': Operation<'/deviceManagement/ndesConnectors', 'get'>;
  'GET /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}': Operation<
    '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    'patch'
  >;
  'POST /deviceManagement/ndesConnectors': Operation<'/deviceManagement/ndesConnectors', 'post'>;
}

/**
 * `DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'ndesConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/ndesConnectors`
 *
 * The collection of Ndes connectors for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/ndesConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/ndesConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/ndesConnectors',
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
 * `GET /deviceManagement/ndesConnectors/{ndesConnector-id}`
 *
 * The collection of Ndes connectors for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'ndesConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/ndesConnectors/{ndesConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/ndesConnectors/{ndesConnector-id}',
    paramDefs: [{ name: 'ndesConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/ndesConnectors`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/ndesConnectors']['body'],
  params?: IEndpoints['POST /deviceManagement/ndesConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/ndesConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/ndesConnectors',
    paramDefs: [],
    params,
    body,
  };
}
