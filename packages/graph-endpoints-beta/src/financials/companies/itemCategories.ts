import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/itemCategories': Operation<
    '/financials/companies/{company-id}/itemCategories',
    'get'
  >;
  'GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}': Operation<
    '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/itemCategories': Operation<
    '/financials/companies/{company-id}/itemCategories',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'itemCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/itemCategories`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/itemCategories']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/itemCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/itemCategories',
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
 * `GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'itemCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/itemCategories/{itemCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/itemCategories/{itemCategory-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'itemCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/itemCategories`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/itemCategories']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/itemCategories']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/itemCategories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/itemCategories',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
