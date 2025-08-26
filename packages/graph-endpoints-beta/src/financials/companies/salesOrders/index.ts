export * as currency from './currency';
export * as customer from './customer';
export * as paymentTerm from './paymentTerm';
export * as salesOrderLines from './salesOrderLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesOrders': Operation<
    '/financials/companies/{company-id}/salesOrders',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}': Operation<
    '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesOrders`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/salesOrders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrders',
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
 * `GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesOrder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesOrders/{salesOrder-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesOrders/{salesOrder-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesOrder-id', in: 'path' },
    ],
    params,
    body,
  };
}
