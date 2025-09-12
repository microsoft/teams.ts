export * as customer from './customer';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments',
    'get'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'customerPaymentJournal-id', 'customerPayment-id'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments',
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id', 'customerPayment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments/{customerPayment-id}',
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id', 'customerPayment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/customerPayments',
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id'],
    },
    params,
    body,
  };
}
