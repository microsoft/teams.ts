import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/accounts': Operation<
    '/financials/companies/{company-id}/accounts',
    'get'
  >;
  'GET /financials/companies/{company-id}/accounts/{account-id}': Operation<
    '/financials/companies/{company-id}/accounts/{account-id}',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/accounts`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/accounts']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/accounts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/accounts',
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
 * `GET /financials/companies/{company-id}/accounts/{account-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/accounts/{account-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/accounts/{account-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/accounts/{account-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'account-id', in: 'path' },
    ],
    params,
  };
}
