export * as account from './account';
export * as item from './item';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesQuoteLines': Operation<
    '/financials/companies/{company-id}/salesQuoteLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}': Operation<
    '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}': Operation<
    '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}',
    'patch'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesQuoteLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuoteLines',
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
 * `GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuoteLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuoteLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
