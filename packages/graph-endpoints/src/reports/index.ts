export * as authenticationMethods from './authenticationMethods';
export * as dailyPrintUsageByPrinter from './dailyPrintUsageByPrinter';
export * as dailyPrintUsageByUser from './dailyPrintUsageByUser';
export * as monthlyPrintUsageByPrinter from './monthlyPrintUsageByPrinter';
export * as monthlyPrintUsageByUser from './monthlyPrintUsageByUser';
export * as partners from './partners';
export * as security from './security';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /reports': Operation<'/reports', 'get'>;
  'PATCH /reports': Operation<'/reports', 'patch'>;
}

/**
 * `GET /reports`
 *
 * Read properties and relationships of the reportRoot object.
 */
export function list(
  params?: IEndpoints['GET /reports']['parameters']
): EndpointRequest<IEndpoints['GET /reports']['response']> {
  return {
    method: 'get',
    path: '/reports',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports`
 *
 * Update the properties of a reportRoot object.
 */
export function update(
  body: IEndpoints['PATCH /reports']['body'],
  params?: IEndpoints['PATCH /reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports']['response']> {
  return {
    method: 'patch',
    path: '/reports',
    paramDefs: [],
    params,
    body,
  };
}
