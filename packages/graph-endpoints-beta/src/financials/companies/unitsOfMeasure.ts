import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/unitsOfMeasure': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure',
    'get'
  >;
  'GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/unitsOfMeasure': Operation<
    '/financials/companies/{company-id}/unitsOfMeasure',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'unitOfMeasure-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/unitsOfMeasure`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/unitsOfMeasure',
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
 * `GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'unitOfMeasure-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/unitsOfMeasure/{unitOfMeasure-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'unitOfMeasure-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/unitsOfMeasure`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/unitsOfMeasure']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/unitsOfMeasure',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
