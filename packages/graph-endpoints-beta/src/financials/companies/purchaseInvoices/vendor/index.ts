export * as currency from './currency';
export * as paymentMethod from './paymentMethod';
export * as paymentTerm from './paymentTerm';
export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
