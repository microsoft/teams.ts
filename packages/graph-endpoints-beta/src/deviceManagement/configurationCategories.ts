import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationCategories': Operation<
    '/deviceManagement/configurationCategories',
    'get'
  >;
  'GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}': Operation<
    '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationCategories': Operation<
    '/deviceManagement/configurationCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationCategories`
 *
 * List of all Configuration Categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configurationCategories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationCategories',
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
 * `GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
 *
 * List of all Configuration Categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationCategories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationCategories']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/configurationCategories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationCategories',
    paramDefs: [],
    params,
    body,
  };
}
