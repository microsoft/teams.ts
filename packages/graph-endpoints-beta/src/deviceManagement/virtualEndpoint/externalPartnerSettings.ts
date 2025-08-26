import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartnerSettings': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/externalPartnerSettings': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcExternalPartnerSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/externalPartnerSettings`
 *
 * Get a list of the cloudPcExternalPartnerSetting objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/externalPartnerSettings',
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
 * `GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
 *
 * Read the properties and relationships of a cloudPcExternalPartnerSetting object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcExternalPartnerSetting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
 *
 * Update the properties of a cloudPcExternalPartnerSetting object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    paramDefs: [{ name: 'cloudPcExternalPartnerSetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/externalPartnerSettings`
 *
 * Create a new cloudPcExternalPartnerSetting object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartnerSettings']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartnerSettings']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartnerSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/externalPartnerSettings',
    paramDefs: [],
    params,
    body,
  };
}
