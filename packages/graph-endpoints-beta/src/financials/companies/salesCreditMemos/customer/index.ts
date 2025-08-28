export * as currency from './currency';
export * as paymentMethod from './paymentMethod';
export * as paymentTerm from './paymentTerm';
export * as picture from './picture';
export * as shipmentMethod from './shipmentMethod';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
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
 * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/customer',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
    body,
  };
}
