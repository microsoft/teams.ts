export * as recommendedSettings from './recommendedSettings';
export * as settingDefinitions from './settingDefinitions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories`
 *
 * Collection of setting categories within the template
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
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
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 * Collection of setting categories within the template
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}
