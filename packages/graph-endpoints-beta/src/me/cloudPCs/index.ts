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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'delete'>;
  'GET /me/cloudPCs': Operation<'/me/cloudPCs', 'get'>;
  'GET /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'get'>;
  'PATCH /me/cloudPCs/{cloudPC-id}': Operation<'/me/cloudPCs/{cloudPC-id}', 'patch'>;
  'POST /me/cloudPCs': Operation<'/me/cloudPCs', 'post'>;
}

/**
 * `DELETE /me/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/cloudPCs`
 *
 * List the cloudPC devices that are attributed to the signed-in user.
 */
export function list(
  params?: IEndpoints['GET /me/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudPCs',
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
 * `GET /me/cloudPCs/{cloudPC-id}`
 *
 * Read the properties and relationships of a specific cloudPC object.
 */
export function get(
  params?: IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/cloudPCs/{cloudPC-id}',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs']['body'],
  params?: IEndpoints['POST /me/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs',
    paramDefs: [],
    params,
    body,
  };
}
