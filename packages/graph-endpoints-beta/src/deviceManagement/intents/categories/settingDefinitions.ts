import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions`
 *
 * The setting definitions this category contains
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentSettingCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 * The setting definitions this category contains
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions/{deviceManagementSettingDefinition-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentSettingCategory-id', in: 'path' },
      { name: 'deviceManagementSettingDefinition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/categories/{deviceManagementIntentSettingCategory-id}/settingDefinitions',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentSettingCategory-id', in: 'path' },
    ],
    params,
    body,
  };
}
