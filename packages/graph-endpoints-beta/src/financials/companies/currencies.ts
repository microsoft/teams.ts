import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/currencies': Operation<
    '/financials/companies/{company-id}/currencies',
    'get'
  >;
  'GET /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/currencies/{currency-id}': Operation<
    '/financials/companies/{company-id}/currencies/{currency-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/currencies': Operation<
    '/financials/companies/{company-id}/currencies',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/currencies/{currency-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/currencies/{currency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/currencies/{currency-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'currency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/currencies`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/currencies']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/currencies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/currencies',
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
 * `GET /financials/companies/{company-id}/currencies/{currency-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/currencies/{currency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/currencies/{currency-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'currency-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/currencies/{currency-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/currencies/{currency-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/currencies/{currency-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'currency-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/currencies`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/currencies']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/currencies']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/currencies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/currencies',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
