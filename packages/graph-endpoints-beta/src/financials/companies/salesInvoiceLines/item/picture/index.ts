export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture': Operation<
    '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture/{picture-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesInvoiceLines/{salesInvoiceLine-id}/item/picture',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesInvoiceLine-id', in: 'path' },
    ],
    params,
    body,
  };
}
