import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'delete'
  >;
  'GET /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory': Operation<
    '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    'patch'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'item-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/items/{item-id}/itemCategory`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'item-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}/itemCategory']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/items/{item-id}/itemCategory',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'item-id', in: 'path' },
    ],
    params,
    body,
  };
}
