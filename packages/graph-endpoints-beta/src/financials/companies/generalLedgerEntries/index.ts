export * as account from './account';

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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'generalLedgerEntry-id', in: 'path' },
    ],
    params,
  };
}
