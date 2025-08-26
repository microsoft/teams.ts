import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/agedAccountsPayable': Operation<
    '/financials/companies/{company-id}/agedAccountsPayable',
    'get'
  >;
  'GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}': Operation<
    '/financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/agedAccountsPayable`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/agedAccountsPayable',
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
 * `GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/agedAccountsPayable/{agedAccountsPayable-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'agedAccountsPayable-id', in: 'path' },
    ],
    params,
  };
}
