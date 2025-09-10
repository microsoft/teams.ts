import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /financials/companies/{company-id}/dimensions': Operation<
    '/financials/companies/{company-id}/dimensions',
    'get'
  >;
  'GET /financials/companies/{company-id}/dimensions/{dimension-id}': Operation<
    '/financials/companies/{company-id}/dimensions/{dimension-id}',
    'get'
  >;
  'GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues': Operation<
    '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues',
    'get'
  >;
  'GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}': Operation<
    '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}',
    'get'
  >;
}

/**
 * `GET /financials/companies/{company-id}/dimensions`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/dimensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions',
    paramDefs: {
      path: ['company-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/dimensions/{dimension-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions/{dimension-id}',
    paramDefs: {
      path: ['company-id', 'dimension-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const dimensionValues = {
  /**
   * `GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues`
   *
   */
  list: function list(
    params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['company-id', 'dimension-id'],
      },
      params,
    };
  },
  /**
   * `GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['company-id', 'dimension-id', 'dimensionValue-id'],
      },
      params,
    };
  },
};
