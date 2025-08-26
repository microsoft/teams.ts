export * as activity from './activity';
export * as configuration from './configuration';
export * as health from './health';
export * as operations from './operations';
export * as restart from './restart';
export * as runDiagnostics from './runDiagnostics';
export * as updateSoftware from './updateSoftware';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'delete'
  >;
  'GET /teamwork/devices': Operation<'/teamwork/devices', 'get'>;
  'GET /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}',
    'patch'
  >;
  'POST /teamwork/devices': Operation<'/teamwork/devices', 'post'>;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices`
 *
 * Get a list of all Microsoft Teams-enabled devices provisioned for a tenant.
 */
export function list(
  params?: IEndpoints['GET /teamwork/devices']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices',
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
 * `GET /teamwork/devices/{teamworkDevice-id}`
 *
 * Get the properties of a Microsoft Teams-enabled device. For example, you can use this method to get the device type, hardware detail, activity state, and health status information for a device that&#x27;s enabled for Teams.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamwork/devices`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/devices']['body'],
  params?: IEndpoints['POST /teamwork/devices']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices',
    paramDefs: [],
    params,
    body,
  };
}
