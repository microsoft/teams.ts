import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/snapshots': Operation<
    '/deviceManagement/virtualEndpoint/snapshots',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}': Operation<
    '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/snapshots': Operation<
    '/deviceManagement/virtualEndpoint/snapshots',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcSnapshot-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/snapshots`
 *
 * Cloud PC snapshots.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/snapshots',
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
 * `GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 * Cloud PC snapshots.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcSnapshot-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/snapshots/{cloudPcSnapshot-id}',
    paramDefs: [{ name: 'cloudPcSnapshot-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/snapshots`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/snapshots']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/snapshots',
    paramDefs: [],
    params,
    body,
  };
}
