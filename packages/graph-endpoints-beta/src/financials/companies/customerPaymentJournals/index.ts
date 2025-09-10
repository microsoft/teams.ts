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
  'GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account': Operation<
    '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['company-id', 'customerPaymentJournal-id'],
    },
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
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'customerPaymentJournal-id'],
    },
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
    paramDefs: {
      path: ['company-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/customerPaymentJournals/{customerPaymentJournal-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'customerPaymentJournal-id'],
      },
      params,
    };
  },
};
