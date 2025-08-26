export * as categories from './categories';
export * as createInstance from './createInstance';
export * as importOffice365DeviceConfigurationPolicies from './importOffice365DeviceConfigurationPolicies';
export * as migratableTo from './migratableTo';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/templates': Operation<'/deviceManagement/templates', 'get'>;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/templates': Operation<'/deviceManagement/templates', 'post'>;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates`
 *
 * The available templates
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/templates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates',
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
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 * The available templates
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates']['body'],
  params?: IEndpoints['POST /deviceManagement/templates']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/templates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates',
    paramDefs: [],
    params,
    body,
  };
}
