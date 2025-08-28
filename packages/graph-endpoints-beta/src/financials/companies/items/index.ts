export * as itemCategory from './itemCategory';
export * as picture from './picture';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/items': Operation<
    '/financials/companies/{company-id}/items',
    'get'
  >;
  'GET /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/items/{item-id}': Operation<
    '/financials/companies/{company-id}/items/{item-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/items': Operation<
    '/financials/companies/{company-id}/items',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/items/{item-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'item-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/items`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/items',
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
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/items/{item-id}',
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
 * `PATCH /financials/companies/{company-id}/items/{item-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/items/{item-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/items/{item-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'item-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/items']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/items',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
