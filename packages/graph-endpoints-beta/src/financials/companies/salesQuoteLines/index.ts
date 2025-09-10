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
  'GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account': Operation<
    '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account',
    'get'
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
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'salesQuoteLine-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['company-id', 'salesQuoteLine-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesQuoteLines/{salesQuoteLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesQuoteLine-id'],
      },
      params,
    };
  },
};
