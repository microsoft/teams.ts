import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
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
 * `GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues',
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
      { name: 'dimension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/dimensions/{dimension-id}/dimensionValues/{dimensionValue-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'dimension-id', in: 'path' },
      { name: 'dimensionValue-id', in: 'path' },
    ],
    params,
  };
}
