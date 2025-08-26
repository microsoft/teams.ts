import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'delete'
  >;
  'GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'get'
  >;
  'PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings': Operation<
    '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
 *
 * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['body'],
  params?: IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/exchangeOnPremisesPolicy/conditionalAccessSettings',
    paramDefs: [],
    params,
    body,
  };
}
