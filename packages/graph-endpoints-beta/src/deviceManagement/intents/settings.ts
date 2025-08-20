import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/settings': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/settings`
 *
 * Collection of all settings to be applied
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
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
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
 *
 * Collection of all settings to be applied
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings/{deviceManagementSettingInstance-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementSettingInstance-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/settings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/settings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/settings',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
