import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'delete'
  >;
  'GET /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/customers/{customer-id}/currency': Operation<
    '/financials/companies/{company-id}/customers/{customer-id}/currency',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/customers/{customer-id}/currency`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'customer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/customers/{customer-id}/currency`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'customer-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/customers/{customer-id}/currency`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/customers/{customer-id}/currency']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/customers/{customer-id}/currency',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'customer-id', in: 'path' },
    ],
    params,
    body,
  };
}
