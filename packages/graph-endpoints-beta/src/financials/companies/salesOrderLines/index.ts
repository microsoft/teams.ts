export * as item from './item';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/salesOrderLines': Operation<
    '/financials/companies/{company-id}/salesOrderLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    'patch'
  >;
  'GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account': Operation<
    '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/salesOrderLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrderLines']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrderLines',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    paramDefs: {
      path: ['company-id', 'salesOrderLine-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}',
    paramDefs: {
      path: ['company-id', 'salesOrderLine-id'],
    },
    params,
    body,
  };
}

export const account = {
  /**
   * `GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/salesOrderLines/{salesOrderLine-id}/account',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'salesOrderLine-id'],
      },
      params,
    };
  },
};
