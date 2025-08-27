export * as dimensionValues from './dimensionValues';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/dimensions': Operation<
    '/financials/companies/{company-id}/dimensions',
    'get'
  >;
  'GET /financials/companies/{company-id}/dimensions/{dimension-id}': Operation<
    '/financials/companies/{company-id}/dimensions/{dimension-id}',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/dimensions`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/dimensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/dimensions/{dimension-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions/{dimension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'dimension-id', in: 'path' },
    ],
    params,
  };
}
