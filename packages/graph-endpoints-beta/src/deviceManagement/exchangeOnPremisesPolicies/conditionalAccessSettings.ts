import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
 *
 * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}/conditionalAccessSettings',
    paramDefs: [{ name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' }],
    params,
    body,
  };
}
