export * as connectors from './connectors';
export * as operations from './operations';
export * as printerShares from './printerShares';
export * as printers from './printers';
export * as services from './services';
export * as shares from './shares';
export * as taskDefinitions from './taskDefinitions';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /print': Operation<'/print', 'get'>;
  'PATCH /print': Operation<'/print', 'patch'>;
}

/**
 * `GET /print`
 *
 */
export function get(
  params?: IEndpoints['GET /print']['parameters']
): EndpointRequest<IEndpoints['GET /print']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /print`
 *
 */
export function update(
  body: IEndpoints['PATCH /print']['body'],
  params?: IEndpoints['PATCH /print']['parameters']
): EndpointRequest<IEndpoints['PATCH /print']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print',
    paramDefs: [],
    params,
    body,
  };
}
