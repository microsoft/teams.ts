import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/countriesRegions': Operation<
    '/financials/companies/{company-id}/countriesRegions',
    'get'
  >;
  'GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}': Operation<
    '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/countriesRegions': Operation<
    '/financials/companies/{company-id}/countriesRegions',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'countryRegion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/countriesRegions`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/countriesRegions']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/countriesRegions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/countriesRegions',
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
 * `GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'countryRegion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/countriesRegions/{countryRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/countriesRegions/{countryRegion-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'countryRegion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/countriesRegions`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/countriesRegions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/countriesRegions',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
