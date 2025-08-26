import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/agedAccountsReceivable': Operation<
    '/financials/companies/{company-id}/agedAccountsReceivable',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}': Operation<
    '/financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/agedAccountsReceivable`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/agedAccountsReceivable',
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
 * `GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/agedAccountsReceivable/{agedAccountsReceivable-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'agedAccountsReceivable-id', in: 'path' },
    ],
    params,
  };
}
