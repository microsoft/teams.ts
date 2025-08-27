export * as conditionalAccessSettings from './conditionalAccessSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicy': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicy`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicy`
 *
 * The policy which controls mobile device access to Exchange On Premises
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicy`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicy',
    paramDefs: [],
    params,
    body,
  };
}
