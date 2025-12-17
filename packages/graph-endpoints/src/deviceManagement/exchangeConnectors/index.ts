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
  'POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync': Operation<
    '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync',
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
    method: 'delete',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementExchangeConnector-id'],
    },
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
    method: 'get',
    path: '/deviceManagement/exchangeConnectors',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    method: 'get',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: {
      path: ['deviceManagementExchangeConnector-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}',
    paramDefs: {
      path: ['deviceManagementExchangeConnector-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/exchangeConnectors`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/exchangeConnectors']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/exchangeConnectors']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/exchangeConnectors',
    body,
  };
}

export const sync = {
  /**
   * `POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['body'],
    params?: IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync',
      paramDefs: {
        path: ['deviceManagementExchangeConnector-id'],
      },
      params,
      body,
    };
  },
};
