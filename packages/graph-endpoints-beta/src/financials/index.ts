export * as companies from './companies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /financials': Operation<'/financials', 'get'>;
  'PATCH /financials': Operation<'/financials', 'patch'>;
}

/**
 * `GET /financials`
 *
 */
export function list(
  params?: IEndpoints['GET /financials']['parameters']
): EndpointRequest<IEndpoints['GET /financials']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /financials`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials']['body'],
  params?: IEndpoints['PATCH /financials']['parameters']
): EndpointRequest<IEndpoints['PATCH /financials']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials',
    paramDefs: [],
    params,
    body,
  };
}
