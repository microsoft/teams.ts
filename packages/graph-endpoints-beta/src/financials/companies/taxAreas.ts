import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/taxAreas': Operation<
    '/financials/companies/{company-id}/taxAreas',
    'get'
  >;
  'GET /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}': Operation<
    '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/taxAreas': Operation<
    '/financials/companies/{company-id}/taxAreas',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'taxArea-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/taxAreas`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/taxAreas']['parameters']
): EndpointRequest<IEndpoints['GET /financials/companies/{company-id}/taxAreas']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/taxAreas',
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
 * `GET /financials/companies/{company-id}/taxAreas/{taxArea-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'taxArea-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/taxAreas/{taxArea-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/taxAreas/{taxArea-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'taxArea-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/taxAreas`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/taxAreas']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/taxAreas']['parameters']
): EndpointRequest<IEndpoints['POST /financials/companies/{company-id}/taxAreas']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/taxAreas',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
