export * as account from './account';
export * as item from './item';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesOrderLines': Operation<
    '/financials/companies/{company-id}/salesOrderLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesOrderLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrderLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrderLines',
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
 * `GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesOrderLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesOrderLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
