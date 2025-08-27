export * as account from './account';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/journalLines': Operation<
    '/financials/companies/{company-id}/journalLines',
    'get'
  >;
  'GET /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}': Operation<
    '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/journalLines': Operation<
    '/financials/companies/{company-id}/journalLines',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'journalLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/journalLines`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/journalLines']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/journalLines']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journalLines',
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
 * `GET /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'journalLine-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/journalLines/{journalLine-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/journalLines/{journalLine-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'journalLine-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/journalLines`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/journalLines']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/journalLines']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/journalLines']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/journalLines',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
