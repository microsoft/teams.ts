export * as currency from './currency';
export * as paymentMethod from './paymentMethod';
export * as paymentTerm from './paymentTerm';
export * as picture from './picture';
export * as shipmentMethod from './shipmentMethod';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
    body,
  };
}
