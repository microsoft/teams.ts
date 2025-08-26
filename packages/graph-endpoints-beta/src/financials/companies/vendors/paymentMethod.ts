import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod': Operation<
    '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'vendor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
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
 * `PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/vendors/{vendor-id}/paymentMethod',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'vendor-id', in: 'path' },
    ],
    params,
    body,
  };
}
