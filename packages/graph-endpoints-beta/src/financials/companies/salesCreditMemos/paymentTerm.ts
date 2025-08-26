import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm': Operation<
    '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesCreditMemos/{salesCreditMemo-id}/paymentTerm',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesCreditMemo-id', in: 'path' },
    ],
    params,
    body,
  };
}
