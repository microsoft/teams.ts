export * as sync from './sync';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}': Operation<
    '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    'delete'
  >;
  'GET /deviceManagement/exchangeConnectors': Operation<
    '/deviceManagement/exchangeConnectors',
    'get'
  >;
  'GET /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}': Operation<
    '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    'get'
  >;
  'PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}': Operation<
    '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    'patch'
  >;
  'POST /deviceManagement/exchangeConnectors': Operation<
    '/deviceManagement/exchangeConnectors',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementExchangeConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeConnectors`
 *
 * The list of Exchange Connectors configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/exchangeConnectors']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/exchangeConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeConnectors',
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
 * `GET /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}`
 *
 * The list of Exchange Connectors configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementExchangeConnector-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: [{ name: 'deviceManagementExchangeConnector-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/exchangeConnectors`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/exchangeConnectors']['body'],
  params?: IEndpoints['POST /deviceManagement/exchangeConnectors']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/exchangeConnectors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/exchangeConnectors',
    paramDefs: [],
    params,
    body,
  };
}
