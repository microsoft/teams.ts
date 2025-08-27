export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture',
    'get'
  >;
  'GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture': Operation<
    '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture',
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
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture/{picture-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
      { name: 'picture-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/salesQuotes/{salesQuote-id}/customer/picture',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'salesQuote-id', in: 'path' },
    ],
    params,
    body,
  };
}
