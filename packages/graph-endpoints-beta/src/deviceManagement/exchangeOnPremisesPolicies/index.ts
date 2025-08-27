export * as conditionalAccessSettings from './conditionalAccessSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies',
    'get'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/exchangeOnPremisesPolicies': Operation<
    '/deviceManagement/exchangeOnPremisesPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicies`
 *
 * The list of Exchange On Premisis policies configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicies',
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
 * `GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 * The list of Exchange On Premisis policies configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicies/{deviceManagementExchangeOnPremisesPolicy-id}',
    paramDefs: [{ name: 'deviceManagementExchangeOnPremisesPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/exchangeOnPremisesPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/exchangeOnPremisesPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/exchangeOnPremisesPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/exchangeOnPremisesPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/exchangeOnPremisesPolicies',
    paramDefs: [],
    params,
    body,
  };
}
