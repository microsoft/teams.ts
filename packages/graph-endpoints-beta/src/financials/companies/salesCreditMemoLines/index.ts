export * as account from './account';
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemoLine-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemoLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
