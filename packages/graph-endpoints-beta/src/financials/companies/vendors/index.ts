export * as currency from './currency';
export * as paymentMethod from './paymentMethod';
export * as paymentTerm from './paymentTerm';
export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/vendors': Operation<
    '/financials/companies/{company-id}/vendors',
    'get'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/vendors': Operation<
    '/financials/companies/{company-id}/vendors',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'vendor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/vendors`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/vendors']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/vendors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/vendors',
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
 * `GET /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'vendor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'vendor-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/vendors`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/vendors']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/vendors']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/vendors']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/vendors',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
