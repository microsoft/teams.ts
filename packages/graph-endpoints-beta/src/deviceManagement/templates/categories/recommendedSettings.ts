import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings`
 *
 * The settings this category contains
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
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
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
 *
 * The settings this category contains
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementTemplateSettingCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}
