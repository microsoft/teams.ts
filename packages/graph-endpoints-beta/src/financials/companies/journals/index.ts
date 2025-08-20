export * as account from './account';
export * as journalLines from './journalLines';
export * as post from './post';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/journals': Operation<
    '/financials/companies/{company-id}/journals',
    'get'
  >;
  'GET /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/journals/{journal-id}': Operation<
    '/financials/companies/{company-id}/journals/{journal-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/journals': Operation<
    '/financials/companies/{company-id}/journals',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'journal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journals`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/journals']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/journals']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journals',
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
 * `GET /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'journal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/journals/{journal-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/journals/{journal-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/journals/{journal-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'journal-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/journals`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/journals']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/journals']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/journals']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/journals',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
