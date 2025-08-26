import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceSettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries`
 *
 * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
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
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
 *
 * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceSettingStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceSettingStateSummary-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceSettingStateSummaries',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
