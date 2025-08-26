import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwarePasswordInfo': Operation<
    '/deviceManagement/hardwarePasswordInfo',
    'get'
  >;
  'GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}': Operation<
    '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwarePasswordInfo': Operation<
    '/deviceManagement/hardwarePasswordInfo',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwarePasswordInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwarePasswordInfo`
 *
 * Intune will provide customer the ability to configure BIOS configuration settings on the enrolled Windows 10 and Windows 11 Microsoft Entra joined devices. Starting from June, 2024, customers should start using hardwarePasswordDetail resource type - Microsoft Graph beta | Microsoft Learn. HardwarePasswordInfo will be marked as deprecated with Intune Release 2409
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwarePasswordInfo']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/hardwarePasswordInfo']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwarePasswordInfo',
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
 * `GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
 *
 * Intune will provide customer the ability to configure BIOS configuration settings on the enrolled Windows 10 and Windows 11 Microsoft Entra joined devices. Starting from June, 2024, customers should start using hardwarePasswordDetail resource type - Microsoft Graph beta | Microsoft Learn. HardwarePasswordInfo will be marked as deprecated with Intune Release 2409
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwarePasswordInfo-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwarePasswordInfo/{hardwarePasswordInfo-id}',
    paramDefs: [{ name: 'hardwarePasswordInfo-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwarePasswordInfo`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwarePasswordInfo']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwarePasswordInfo']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/hardwarePasswordInfo']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwarePasswordInfo',
    paramDefs: [],
    params,
    body,
  };
}
