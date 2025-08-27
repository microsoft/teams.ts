export * as customer from './customer';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments': Operation<
    '/financials/companies/{company-id}/customerPayments',
    'get'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/customerPayments': Operation<
    '/financials/companies/{company-id}/customerPayments',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPayments`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPayments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPayments',
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
 * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customerPayments/{customerPayment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/customerPayments`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/customerPayments']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/customerPayments']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/customerPayments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/customerPayments',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
