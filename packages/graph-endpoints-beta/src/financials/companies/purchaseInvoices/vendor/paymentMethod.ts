import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
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
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentMethod',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
