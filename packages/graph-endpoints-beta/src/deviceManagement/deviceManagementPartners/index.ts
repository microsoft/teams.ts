export * as terminate from './terminate';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementPartners': Operation<
    '/deviceManagement/deviceManagementPartners',
    'get'
  >;
  'GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementPartners': Operation<
    '/deviceManagement/deviceManagementPartners',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementPartners`
 *
 * The list of Device Management Partners configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementPartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceManagementPartners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementPartners',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 * The list of Device Management Partners configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}',
    paramDefs: [{ name: 'deviceManagementPartner-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementPartners`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementPartners']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementPartners']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceManagementPartners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementPartners',
    paramDefs: [],
    params,
    body,
  };
}
