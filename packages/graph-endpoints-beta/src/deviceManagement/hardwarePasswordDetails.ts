import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwarePasswordDetails': Operation<
    '/deviceManagement/hardwarePasswordDetails',
    'get'
  >;
  'GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}': Operation<
    '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwarePasswordDetails': Operation<
    '/deviceManagement/hardwarePasswordDetails',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwarePasswordDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwarePasswordDetails`
 *
 * Device BIOS password information for devices with managed BIOS and firmware configuration, which provides device serial number, list of previous passwords, and current password.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/hardwarePasswordDetails']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/hardwarePasswordDetails']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwarePasswordDetails',
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
 * `GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
 *
 * Device BIOS password information for devices with managed BIOS and firmware configuration, which provides device serial number, list of previous passwords, and current password.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwarePasswordDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwarePasswordDetails/{hardwarePasswordDetail-id}',
    paramDefs: [{ name: 'hardwarePasswordDetail-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwarePasswordDetails`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwarePasswordDetails']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwarePasswordDetails']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/hardwarePasswordDetails']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwarePasswordDetails',
    paramDefs: [],
    params,
    body,
  };
}
