import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
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
 * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
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
 * `PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}/customer/shipmentMethod',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
    body,
  };
}
