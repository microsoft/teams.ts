import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/complianceManagementPartners': Operation<
    '/deviceManagement/complianceManagementPartners',
    'get'
  >;
  'GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}': Operation<
    '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    'patch'
  >;
  'POST /deviceManagement/complianceManagementPartners': Operation<
    '/deviceManagement/complianceManagementPartners',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'complianceManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/complianceManagementPartners`
 *
 * The list of Compliance Management Partners configured by the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/complianceManagementPartners']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/complianceManagementPartners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceManagementPartners',
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
 * `GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
 *
 * The list of Compliance Management Partners configured by the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'complianceManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}',
    paramDefs: [{ name: 'complianceManagementPartner-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/complianceManagementPartners`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/complianceManagementPartners']['body'],
  params?: IEndpoints['POST /deviceManagement/complianceManagementPartners']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/complianceManagementPartners']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/complianceManagementPartners',
    paramDefs: [],
    params,
    body,
  };
}
