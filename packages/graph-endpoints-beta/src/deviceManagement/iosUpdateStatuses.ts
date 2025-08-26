import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/iosUpdateStatuses': Operation<
    '/deviceManagement/iosUpdateStatuses',
    'get'
  >;
  'GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}': Operation<
    '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/iosUpdateStatuses': Operation<
    '/deviceManagement/iosUpdateStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosUpdateDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/iosUpdateStatuses`
 *
 * The IOS software update installation statuses for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/iosUpdateStatuses']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/iosUpdateStatuses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/iosUpdateStatuses',
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
 * `GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
 *
 * The IOS software update installation statuses for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosUpdateDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}',
    paramDefs: [{ name: 'iosUpdateDeviceStatus-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/iosUpdateStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/iosUpdateStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/iosUpdateStatuses']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/iosUpdateStatuses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/iosUpdateStatuses',
    paramDefs: [],
    params,
    body,
  };
}
