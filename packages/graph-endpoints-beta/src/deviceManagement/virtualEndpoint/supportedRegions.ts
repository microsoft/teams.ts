import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/supportedRegions': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/supportedRegions': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcSupportedRegion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/supportedRegions`
 *
 * List the supported regions that are available for creating Cloud PC connections.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/supportedRegions',
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
 * `GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
 *
 * Cloud PC supported regions.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcSupportedRegion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    paramDefs: [{ name: 'cloudPcSupportedRegion-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/supportedRegions`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/supportedRegions']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/supportedRegions']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/supportedRegions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/supportedRegions',
    paramDefs: [],
    params,
    body,
  };
}
