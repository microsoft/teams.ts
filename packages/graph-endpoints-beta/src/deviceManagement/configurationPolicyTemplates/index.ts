export * as settingTemplates from './settingTemplates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicyTemplates': Operation<
    '/deviceManagement/configurationPolicyTemplates',
    'get'
  >;
  'GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}': Operation<
    '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicyTemplates': Operation<
    '/deviceManagement/configurationPolicyTemplates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementConfigurationPolicyTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicyTemplates`
 *
 * List of all templates
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configurationPolicyTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicyTemplates',
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
 * `GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}`
 *
 * List of all templates
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementConfigurationPolicyTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}',
    paramDefs: [{ name: 'deviceManagementConfigurationPolicyTemplate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicyTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicyTemplates']['body'],
  params?: IEndpoints['POST /deviceManagement/configurationPolicyTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/configurationPolicyTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicyTemplates',
    paramDefs: [],
    params,
    body,
  };
}
