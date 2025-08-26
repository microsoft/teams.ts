import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/complianceCategories': Operation<
    '/deviceManagement/complianceCategories',
    'get'
  >;
  'GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/complianceCategories': Operation<
    '/deviceManagement/complianceCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/complianceCategories`
 *
 * List of all compliance categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/complianceCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/complianceCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceCategories',
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
 * `GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
 *
 * List of all compliance categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/complianceCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/complianceCategories']['body'],
  params?: IEndpoints['POST /deviceManagement/complianceCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/complianceCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/complianceCategories',
    paramDefs: [],
    params,
    body,
  };
}
