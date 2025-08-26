export * as settingDefinitions from './settingDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/categories': Operation<'/deviceManagement/categories', 'get'>;
  'GET /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}': Operation<
    '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/categories': Operation<'/deviceManagement/categories', 'post'>;
}

/**
 * `DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/categories`
 *
 * The available categories
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/categories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/categories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories',
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
 * `GET /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 * The available categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/categories/{deviceManagementSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/categories/{deviceManagementSettingCategory-id}',
    paramDefs: [{ name: 'deviceManagementSettingCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/categories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/categories']['body'],
  params?: IEndpoints['POST /deviceManagement/categories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/categories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/categories',
    paramDefs: [],
    params,
    body,
  };
}
