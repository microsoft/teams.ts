import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/generalLedgerEntries': Operation<
    '/financials/companies/{company-id}/generalLedgerEntries',
    'get'
  >;
  'GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}': Operation<
    '/financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account': Operation<
    '/financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/generalLedgerEntries`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/generalLedgerEntries',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}',
    paramDefs: {
      path: ['company-id', 'generalLedgerEntry-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/generalLedgerEntries/{generalLedgerEntry-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'generalLedgerEntry-id'],
      },
      params,
    };
  },
};
