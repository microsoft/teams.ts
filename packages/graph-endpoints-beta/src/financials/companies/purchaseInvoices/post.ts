import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post': Operation<
    '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/purchaseInvoices/{purchaseInvoice-id}/post',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'purchaseInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
