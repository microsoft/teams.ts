import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/taxGroups': Operation<
    '/financials/companies/{company-id}/taxGroups',
    'get'
  >;
  'GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}': Operation<
    '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/taxGroups': Operation<
    '/financials/companies/{company-id}/taxGroups',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'taxGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/taxGroups`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/taxGroups']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/taxGroups']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/taxGroups',
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
 * `GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'taxGroup-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/taxGroups/{taxGroup-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/taxGroups/{taxGroup-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'taxGroup-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/taxGroups`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/taxGroups']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/taxGroups']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/taxGroups']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/taxGroups',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
