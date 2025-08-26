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
  'DELETE /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'delete'
  >;
  'GET /users/{user-id}/cloudPCs': Operation<'/users/{user-id}/cloudPCs', 'get'>;
  'GET /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'get'
  >;
  'PATCH /users/{user-id}/cloudPCs/{cloudPC-id}': Operation<
    '/users/{user-id}/cloudPCs/{cloudPC-id}',
    'patch'
  >;
  'POST /users/{user-id}/cloudPCs': Operation<'/users/{user-id}/cloudPCs', 'post'>;
}

/**
 * `DELETE /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudPCs`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudPCs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/cloudPCs/{cloudPC-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/cloudPCs/{cloudPC-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/cloudPCs/{cloudPC-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'cloudPC-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/cloudPCs`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/cloudPCs']['body'],
  params?: IEndpoints['POST /users/{user-id}/cloudPCs']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/cloudPCs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/cloudPCs',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
