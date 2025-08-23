import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
 *
 * Deletes a settingStateDeviceSummary.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'settingStateDeviceSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries`
 *
 * List properties and relationships of the settingStateDeviceSummary objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
 *
 * Read properties and relationships of the settingStateDeviceSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'settingStateDeviceSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
 *
 * Update the properties of a settingStateDeviceSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    paramDefs: [
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'settingStateDeviceSummary-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries`
 *
 * Create a new settingStateDeviceSummary object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
