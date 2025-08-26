import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelConfigurations': Operation<
    '/deviceManagement/microsoftTunnelConfigurations',
    'get'
  >;
  'GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}': Operation<
    '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/microsoftTunnelConfigurations': Operation<
    '/deviceManagement/microsoftTunnelConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'microsoftTunnelConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelConfigurations`
 *
 * Collection of MicrosoftTunnelConfiguration settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelConfigurations',
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
 * `GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
 *
 * Collection of MicrosoftTunnelConfiguration settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'microsoftTunnelConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelConfigurations/{microsoftTunnelConfiguration-id}',
    paramDefs: [{ name: 'microsoftTunnelConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/microsoftTunnelConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/microsoftTunnelConfigurations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
