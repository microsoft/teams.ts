import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/paymentTerms': Operation<
    '/financials/companies/{company-id}/paymentTerms',
    'get'
  >;
  'GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}': Operation<
    '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/paymentTerms': Operation<
    '/financials/companies/{company-id}/paymentTerms',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'paymentTerm-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/paymentTerms`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/paymentTerms']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/paymentTerms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/paymentTerms',
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
 * `GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'paymentTerm-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/paymentTerms/{paymentTerm-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/paymentTerms/{paymentTerm-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'paymentTerm-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/paymentTerms`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/paymentTerms']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/paymentTerms',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
