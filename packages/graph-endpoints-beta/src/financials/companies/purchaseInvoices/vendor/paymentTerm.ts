import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'delete'
  >;
  'GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
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
 * `PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/vendor/paymentTerm',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
