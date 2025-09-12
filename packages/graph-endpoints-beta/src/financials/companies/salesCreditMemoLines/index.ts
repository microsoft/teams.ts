export * as item from './item';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesCreditMemoLines': Operation<
    '/financials/companies/{company-id}/salesCreditMemoLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}': Operation<
    '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account': Operation<
    '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemoLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemoLines',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemoLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}',
    paramDefs: {
      path: ['company-id', 'salesCreditMemoLine-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesCreditMemoLines/{salesCreditMemoLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesCreditMemoLine-id'],
      },
      params,
    };
  },
};
