import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post': Operation<
    '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post',
    'post'
  >;
}

/**
 * `POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoices/{salesInvoice-id}/post',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoice-id', in: 'path' },
    ],
    params,
    body,
  };
}
