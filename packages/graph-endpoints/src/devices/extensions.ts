import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /devices/{device-id}/extensions': Operation<'/devices/{device-id}/extensions', 'get'>;
  'GET /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /devices/{device-id}/extensions/{extension-id}': Operation<
    '/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /devices/{device-id}/extensions': Operation<'/devices/{device-id}/extensions', 'post'>;
}

/**
 * `DELETE /devices/{device-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /devices/{device-id}/extensions/{extension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /devices/{device-id}/extensions`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/extensions']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /devices/{device-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the device. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/extensions/{extension-id}']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /devices/{device-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /devices/{device-id}/extensions/{extension-id}']['response']> {
  return {
    method: 'patch',
    path: '/devices/{device-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'device-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /devices/{device-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /devices/{device-id}/extensions']['body'],
  params?: IEndpoints['POST /devices/{device-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/extensions']['response']> {
  return {
    method: 'post',
    path: '/devices/{device-id}/extensions',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
