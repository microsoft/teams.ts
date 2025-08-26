import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
    'get'
  >;
  'GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings': Operation<
    '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings`
 *
 * Collection of all settings this template has
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
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
 * `GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
 *
 * Collection of all settings this template has
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'deviceManagementTemplate-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/templates/{deviceManagementTemplate-id}/settings',
    paramDefs: [{ name: 'deviceManagementTemplate-id', in: 'path' }],
    params,
    body,
  };
}
