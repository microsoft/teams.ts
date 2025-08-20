export * as cancel from './cancel';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaDeployments': Operation<
    '/deviceManagement/zebraFotaDeployments',
    'get'
  >;
  'GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    'patch'
  >;
  'POST /deviceManagement/zebraFotaDeployments': Operation<
    '/deviceManagement/zebraFotaDeployments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'zebraFotaDeployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaDeployments`
 *
 * Collection of ZebraFotaDeployments associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/zebraFotaDeployments']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaDeployments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaDeployments',
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
 * `GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 * Collection of ZebraFotaDeployments associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'zebraFotaDeployment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}',
    paramDefs: [{ name: 'zebraFotaDeployment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/zebraFotaDeployments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaDeployments']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaDeployments']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaDeployments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaDeployments',
    paramDefs: [],
    params,
    body,
  };
}
