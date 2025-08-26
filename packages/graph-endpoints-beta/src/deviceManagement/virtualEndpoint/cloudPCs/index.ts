export * as changeUserAccountType from './changeUserAccountType';
export * as createSnapshot from './createSnapshot';
export * as endGracePeriod from './endGracePeriod';
export * as powerOff from './powerOff';
export * as powerOn from './powerOn';
export * as reboot from './reboot';
export * as rename from './rename';
export * as reprovision from './reprovision';
export * as resize from './resize';
export * as restore from './restore';
export * as retryPartnerAgentInstallation from './retryPartnerAgentInstallation';
export * as setReviewStatus from './setReviewStatus';
export * as start from './start';
export * as stop from './stop';
export * as troubleshoot from './troubleshoot';
export * as validateBulkResize from './validateBulkResize';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudPCs': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/cloudPCs': Operation<
    '/deviceManagement/virtualEndpoint/cloudPCs',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/cloudPCs`
 *
 * List the cloudPC devices in a tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudPCs',
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
 * `GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 * Read the properties and relationships of a specific cloudPC object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/cloudPCs/{cloudPC-id}',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/cloudPCs',
    paramDefs: [],
    params,
    body,
  };
}
