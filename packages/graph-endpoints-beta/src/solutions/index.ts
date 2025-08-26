export * as approval from './approval';
export * as backupRestore from './backupRestore';
export * as bookingBusinesses from './bookingBusinesses';
export * as bookingCurrencies from './bookingCurrencies';
export * as businessScenarios from './businessScenarios';
export * as virtualEvents from './virtualEvents';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /solutions': Operation<'/solutions', 'get'>;
  'PATCH /solutions': Operation<'/solutions', 'patch'>;
}

/**
 * `GET /solutions`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions']['parameters']
): EndpointRequest<IEndpoints['GET /solutions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions']['body'],
  params?: IEndpoints['PATCH /solutions']['parameters']
): EndpointRequest<IEndpoints['PATCH /solutions']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions',
    paramDefs: [],
    params,
    body,
  };
}
