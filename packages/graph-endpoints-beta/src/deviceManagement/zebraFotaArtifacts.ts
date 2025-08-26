import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaArtifacts': Operation<
    '/deviceManagement/zebraFotaArtifacts',
    'get'
  >;
  'GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}': Operation<
    '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    'patch'
  >;
  'POST /deviceManagement/zebraFotaArtifacts': Operation<
    '/deviceManagement/zebraFotaArtifacts',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'zebraFotaArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaArtifacts`
 *
 * The Collection of ZebraFotaArtifacts.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/zebraFotaArtifacts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaArtifacts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaArtifacts',
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
 * `GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
 *
 * The Collection of ZebraFotaArtifacts.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'zebraFotaArtifact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}',
    paramDefs: [{ name: 'zebraFotaArtifact-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/zebraFotaArtifacts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaArtifacts']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaArtifacts']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaArtifacts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaArtifacts',
    paramDefs: [],
    params,
    body,
  };
}
