export * as account from './account';
export * as customerPayments from './customerPayments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals',
    'get'
  >;
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/customerPaymentJournals': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPaymentJournals`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals',
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
 * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPaymentJournal-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/customerPaymentJournals`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/customerPaymentJournals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/customerPaymentJournals',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
