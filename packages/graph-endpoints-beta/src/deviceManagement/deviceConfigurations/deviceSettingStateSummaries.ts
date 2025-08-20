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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    ver: 'beta',
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
 * Device Configuration Setting State Device Summary
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
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
 * Device Configuration Setting State Device Summary
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceSettingStateSummaries',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
