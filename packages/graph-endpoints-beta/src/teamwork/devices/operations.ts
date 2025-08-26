import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'delete'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/operations': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations',
    'get'
  >;
  'GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'get'
  >;
  'PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    'patch'
  >;
  'POST /teamwork/devices/{teamworkDevice-id}/operations': Operation<
    '/teamwork/devices/{teamworkDevice-id}/operations',
    'post'
  >;
}

/**
 * `DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamworkDevice-id', in: 'path' },
      { name: 'teamworkDeviceOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}/operations`
 *
 * Get a list of the operations that are running on a Microsoft Teams-enabled device.
 */
export function list(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
 *
 * Get the details of an async, long-running operation on a Microsoft Teams-enabled device.
 */
export function get(
  params?: IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamworkDevice-id', in: 'path' },
      { name: 'teamworkDeviceOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/devices/{teamworkDevice-id}/operations/{teamworkDeviceOperation-id}',
    paramDefs: [
      { name: 'teamworkDevice-id', in: 'path' },
      { name: 'teamworkDeviceOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/devices/{teamworkDevice-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['body'],
  params?: IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/devices/{teamworkDevice-id}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/devices/{teamworkDevice-id}/operations',
    paramDefs: [{ name: 'teamworkDevice-id', in: 'path' }],
    params,
    body,
  };
}
