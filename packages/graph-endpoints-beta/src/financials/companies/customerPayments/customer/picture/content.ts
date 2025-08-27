import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    'get'
  >;
  'PUT /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content': Operation<
    '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    'put'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content`
 *
 */
export function set(
  body: IEndpoints['PUT /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['body'],
  params?: IEndpoints['PUT /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/financials/companies/{company-id}/customerPayments/{customerPayment-id}/customer/picture/{picture-id}/content',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customerPayment-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
    body,
  };
}
