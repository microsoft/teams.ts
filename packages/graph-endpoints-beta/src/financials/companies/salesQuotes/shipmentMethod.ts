import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/shipmentMethod',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
