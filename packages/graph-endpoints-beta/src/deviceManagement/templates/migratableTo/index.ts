export * as categories from './categories';
export * as createInstance from './createInstance';
export * as importOffice365DeviceConfigurationPolicies from './importOffice365DeviceConfigurationPolicies';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplate-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo`
 *
 * Collection of templates this template can migrate to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 * Collection of templates this template can migrate to
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplate-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplate-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}
