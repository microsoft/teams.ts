export * as currency from './currency';
export * as customer from './customer';
export * as paymentTerm from './paymentTerm';
export * as salesCreditMemoLines from './salesCreditMemoLines';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesCreditMemos': Operation<
    '/financials/companies/{company-id}/salesCreditMemos',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos',
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
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
    body,
  };
}
