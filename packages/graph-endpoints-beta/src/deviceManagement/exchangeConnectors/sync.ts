import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync': Operation<
    '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync',
    'post'
  >;
}

/**
 * `POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['body'],
  params?: IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/exchangeConnectors/{deviceManagementExchangeConnector-id}/sync',
    paramDefs: [{ name: 'deviceManagementExchangeConnector-id', in: 'path' }],
    params,
    body,
  };
}
