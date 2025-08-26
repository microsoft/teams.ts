import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'delete'
  >;
  'GET /financials/companies/{company-id}/shipmentMethods': Operation<
    '/financials/companies/{company-id}/shipmentMethods',
    'get'
  >;
  'GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'get'
  >;
  'PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}': Operation<
    '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    'patch'
  >;
  'POST /financials/companies/{company-id}/shipmentMethods': Operation<
    '/financials/companies/{company-id}/shipmentMethods',
    'post'
  >;
}

/**
 * `DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'company-id', in: 'path' },
      { name: 'shipmentMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /financials/companies/{company-id}/shipmentMethods`
 *
 */
export function list(
  params?: IEndpoints['GET /financials/companies/{company-id}/shipmentMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/shipmentMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/shipmentMethods',
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
 * `GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'company-id', in: 'path' },
      { name: 'shipmentMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['body'],
  params?: IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/financials/companies/{company-id}/shipmentMethods/{shipmentMethod-id}',
    paramDefs: [
      { name: 'company-id', in: 'path' },
      { name: 'shipmentMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /financials/companies/{company-id}/shipmentMethods`
 *
 */
export function create(
  body: IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['body'],
  params?: IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /financials/companies/{company-id}/shipmentMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/financials/companies/{company-id}/shipmentMethods',
    paramDefs: [{ name: 'company-id', in: 'path' }],
    params,
    body,
  };
}
