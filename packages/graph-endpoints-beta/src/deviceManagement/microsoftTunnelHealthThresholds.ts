import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelHealthThresholds': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds',
    'get'
  >;
  'GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    'patch'
  >;
  'POST /deviceManagement/microsoftTunnelHealthThresholds': Operation<
    '/deviceManagement/microsoftTunnelHealthThresholds',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftTunnelHealthThreshold-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelHealthThresholds`
 *
 * Collection of MicrosoftTunnelHealthThreshold settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelHealthThresholds',
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
 * `GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
 *
 * Collection of MicrosoftTunnelHealthThreshold settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftTunnelHealthThreshold-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelHealthThresholds/{microsoftTunnelHealthThreshold-id}',
    paramDefs: [{ name: 'microsoftTunnelHealthThreshold-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelHealthThresholds`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelHealthThresholds']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelHealthThresholds']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/microsoftTunnelHealthThresholds']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelHealthThresholds',
    paramDefs: [],
    params,
    body,
  };
}
